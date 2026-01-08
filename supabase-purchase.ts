/**
 * Supabase Purchase Integration for React/TypeScript
 * Uses RPC function: submit_purchase
 */

// Supabase Configuration
const SUPABASE_URL = 'https://kgksqhyqygepulsqpyen.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtna3NxaHlxeWdlcHVsc3FweWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2OTM4MDQsImV4cCI6MjA4MzI2OTgwNH0.vrBLkcV_-rFWRczjC88rSRpifGLGoNrMfEoCCamii60';

// Types
export interface PurchaseData {
  productSlug: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  receiptFile?: File;
  source?: string;
}

export interface PurchaseResult {
  success: boolean;
  message: string;
  purchaseId?: string;
  data?: any;
}

/**
 * Upload receipt file to Supabase Storage
 */
export async function uploadReceipt(
  file: File,
  customerEmail: string,
  productSlug: string
): Promise<string> {
  const timestamp = Date.now();
  const fileExt = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const safeEmail = customerEmail.replace('@', '_at_').replace(/[^a-zA-Z0-9_]/g, '_');
  const fileName = `${timestamp}_${safeEmail}_${productSlug}.${fileExt}`;

  const response = await fetch(`${SUPABASE_URL}/storage/v1/object/receipts/${fileName}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': file.type,
      'x-upsert': 'true'
    },
    body: file
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to upload receipt');
  }

  return `${SUPABASE_URL}/storage/v1/object/public/receipts/${fileName}`;
}

/**
 * Submit purchase to Supabase via RPC function
 */
export async function submitPurchase(data: PurchaseData): Promise<PurchaseResult> {
  const { productSlug, customerName, customerEmail, customerPhone, receiptFile, source } = data;

  // Upload receipt if provided
  let receiptUrl: string | null = null;
  if (receiptFile) {
    receiptUrl = await uploadReceipt(receiptFile, customerEmail, productSlug);
  }

  // Call RPC function
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/submit_purchase`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'apikey': SUPABASE_ANON_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      p_product_slug: productSlug,
      p_customer_name: customerName,
      p_customer_email: customerEmail.toLowerCase().trim(),
      p_customer_phone: customerPhone || null,
      p_receipt_url: receiptUrl,
      p_source: source || 'landing-' + productSlug
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit purchase');
  }

  const result = await response.json();

  // Check if the RPC function returned success
  if (!result.success) {
    throw new Error(result.error || 'Purchase submission failed');
  }

  return {
    success: true,
    message: result.message || 'Purchase submitted successfully',
    purchaseId: result.purchase_id,
    data: result
  };
}
