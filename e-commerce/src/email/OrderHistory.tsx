import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import OrderInformation from "./components/OrderInformation";
import React from "react";

type OrderHistoryEmailProps = {
  orders: {
    id: string;
    pricePaidInCents: number;
    createdAt: Date;
    downloadVerificationId: string;
    product: {
      name: string;
      imagePath: string;
      description: string;
    };
  }[];
};

OrderHistoryEmail.PreviewProps = {
  orders: [
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      pricePaidInCents: 10000,
      product: {
        name: "Product Name",
        description: "Some description",
        imagePath:
          "/products/0fe1a7cd-3557-4feb-aef9-e5e0e717ccbd-Product Image.jpg",
      },
      downloadVerificationId: crypto.randomUUID(),
    },
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      pricePaidInCents: 12000,
      product: {
        name: "Product Name 2",
        description: "Some description",
        imagePath:
          "/products/0fe1a7cd-3557-4feb-aef9-e5e0e717ccbd-Product Image.jpg",
      },
      downloadVerificationId: crypto.randomUUID(),
    },
  ],
} satisfies OrderHistoryEmailProps;

export default function OrderHistoryEmail({ orders }: OrderHistoryEmailProps) {
  return (
    <Html>
      <Preview>Order History & Downlaod</Preview>
      <Tailwind>
        <Head></Head>
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Order History</Heading>
            {orders.map((order, index) => (
              <React.Fragment key={order.id}>
                <OrderInformation
                  key={order.id}
                  order={order}
                  product={order.product}
                  downloadVerificationId={order.downloadVerificationId}
                />
                {index < orders.length - 1 && <Hr />}
              </React.Fragment>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
