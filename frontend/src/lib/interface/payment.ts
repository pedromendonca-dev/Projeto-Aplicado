"use server";

export interface MercadoPagoPaymentResponse {
  id: number;
  status: string;
  status_detail: string;
  point_of_interaction: {
    transaction_data: {
      qr_code: string;
      qr_code_base64: string;
      ticket_url: string;
    };
  };
}

export interface MercadoPagoPaymentRequest {
  transaction_amount: number;
  description: string;
  payment_method_id: "pix";
  payer: {
    email: string;
    first_name: string;
    last_name: string;
  };
}
