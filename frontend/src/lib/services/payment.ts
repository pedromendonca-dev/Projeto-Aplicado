"use server";

import {
  MercadoPagoPaymentRequest,
  MercadoPagoPaymentResponse,
} from "../interface/payment";

export async function createMercadoPagoPayment(
  paymentData: MercadoPagoPaymentRequest
): Promise<MercadoPagoPaymentResponse> {
  const response = await fetch("http://localhost:3001/api/create-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...paymentData,
      payment_method_id: "pix",
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao gerar pagamento PIX");
  }

  return response.json();
}
