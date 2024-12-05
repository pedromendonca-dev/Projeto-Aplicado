import { MercadoPagoConfig, Payment } from "mercadopago";
import { NextRequest } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
  options: { timeout: 2000 },
});

const payment = new Payment(client);

export async function POST(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("request", request.body);

  const body = {
    transaction_amount: 50.0,
    description: "Serviço de limpeza",
    payment_method_id: "bolbradesco",
    payer: {
      email: "teste@gmail.com",
      first_name: "Marianne",
      last_name: "Gomes",
      identification: {
        type: "CPF",
        number: "19119119100",
      },
      address: {
        zip_code: "12345678",
        street_name: "Rua Exemplo",
        street_number: "123",
        neighborhood: "Bairro Teste",
        city: "São Paulo",
        federal_unit: "SP",
      },
    },
    installments: 1,
  };

  const requestOptions = {
    idempotencyKey: generateIdempotencyKey(),
  };

  function generateIdempotencyKey() {
    const timestamp = Date.now();
    const randomPart = Math.random().toString(36).substring(2, 10);
    return `${timestamp}-${randomPart}`;
  }

  let result;
  await payment
    .create({ body, requestOptions })
    .then((response: any) => {
      console.log(response);
      result = response.transaction_details.external_resource_url;
    })
    .catch(console.log);

  return Response.json({ boleto: result });
}
