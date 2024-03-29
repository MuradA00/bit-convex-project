import { Group, Stack } from "@mantine/core";

import { Analysis } from "./components/Analysis/Analysis";
import { Header } from "./components/Header/Header";

export const TechnicalAnalysisContent = () => {
  return (
    <Stack gap={32} py={64}>
      <Header />
      <Group gap={30}>
        <Analysis percents={5} currency="btcusd" />
        <Analysis percents={25} currency="btcusd" />
        <Analysis percents={45} currency="btcusd" />
        <Analysis percents={65} currency="btcusd" />
        <Analysis percents={80} currency="btcusd" />
        <Analysis percents={95} currency="btcusd" />
      </Group>
    </Stack>
  );
};
