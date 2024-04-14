import { Tabs } from "@/shared/ui/tabs";

import { Container } from "../Container/Container";
import classes from "./MarketTrades.module.css";
import { MarketTradesTab } from "./tabs/MarketTradesTab/MarketTradesTab";

export const MarketTrades = () => {
  return (
    <div className={classes.marketTradesContainer}>
      <Container className={classes.container}>
        <Tabs
          tabsControllsWidth={"fit-content"}
          tabControllPadding={"0 16px"}
          tabControllFontSize={16}
          tabs={[{ id: "marketTrades", title: "Market Trades", content: <MarketTradesTab /> }]}
        />
      </Container>
    </div>
  );
};
