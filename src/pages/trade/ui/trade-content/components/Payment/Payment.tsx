import { Stack } from "@mantine/core";

import { Tabs } from "@/shared/ui/tabs";

import { Container } from "../Container/Container";
import { BuyTab } from "./components/tabs/BuyTab/BuyTab";
import { SellTab } from "./components/tabs/SellTab/SellTab";

const tabs = [
  { id: "buy", title: "Buy", content: <BuyTab /> },
  { id: "sell", title: "Sell", content: <SellTab /> },
];
export const Payment = () => {
  return (
    <Stack>
      <Container style={{padding: '2rem clamp(1.5rem, 2vw, 2rem) 2rem clamp(1.5rem, 2vw, 2rem)'}}>
        <Tabs overflowContainer={false} tabs={tabs} />
      </Container>
    </Stack>
  );
};
