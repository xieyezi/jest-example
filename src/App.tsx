import _ from "lodash";
import { useMemo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export enum ModuleType {
  SOURCING = "SourcingAndManufacturing",
  BUSINESS_PLANNING_TOOLS = "BusinessPlanningTools",
  PRINT_ON_DEMAND = "PrintOnDemand",
  WEEKLY_WORKSHOPS = "WeeklyWorkshops",
  PRODUCT_DESIGN = "ProductDesign",
  SALES_CHANNELS = "SalesChannels",
  DATA_AND_ANALYTICS = "DataAndAnalytics",
  MARKETING_TOOLS = "EmailAndSMS",
  MARKETING_TOOLS_EMAIL = "Email",
  MARKETING_TOOLS_SMS = "SMS",
  MARKETING_TOOLS_AFFILIATE = "Affiliate",
  STOREFRONT = "Storefront",
  PREMIUM_ORDER_FULFILLMENT = "PremiumStorageAndFulfillment",
  ORDER_FULFILLMENT = "StorageAndFulfillment",
  BEGINNER_BUNDLE = "BeginnerBundle",
  PROFESSIONAL_BUNDLE = "ProfessionalBundle",
  LAUNCH_BUNDLE = "LaunchBundle",
  DESIGN_AND_SAMPLE_BUNDLE = "DesignAndSampleBundle",
  GROW_BUNDLE = "GrowBundle"
}

const UPSELL_MODULE_CARDS: Record<string, unknown> = {
  SourcingAndManufacturing: [
    {
      moduleType: ModuleType.PRODUCT_DESIGN,
      reason: "Purchased 7,000 times with Sourcing"
    },
    {
      moduleType: ModuleType.ORDER_FULFILLMENT,
      reason: "Purchased 5,000 times with Sourcing"
    },
    {
      moduleType: ModuleType.STOREFRONT,
      reason: "Purchased 4,000 times with Sourcing"
    },
    {
      moduleType: ModuleType.SALES_CHANNELS,
      reason: "Purchased 2,000 times with Sourcing"
    },
    {
      moduleType: ModuleType.MARKETING_TOOLS_EMAIL,
      reason: "Purchased 1,000 times with Sourcing"
    }
  ]
};

function App() {
  const selectedModuleTypes = ["SourcingAndManufacturing", "IntermediateBundle"];

  const upsellCards = useMemo(() => {
    return _.chain(selectedModuleTypes)
      .map((moduleType) => UPSELL_MODULE_CARDS[moduleType] ?? [])
      .flatten()
      .uniqBy("moduleType")
      .take(2)
      .value();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>{JSON.stringify(upsellCards)}</div>
    </>
  );
}

export default App;
