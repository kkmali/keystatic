"use client";

import { useState } from "react";

import { Check, ChevronsUpDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FeatureSection {
  category: string;
  features: {
    name: string;
    free: true | false | null | string;
    startup: true | false | null | string;
    enterprise: true | false | null | string;
  }[];
}

const defaultPricingPlans = [
  {
    name: "Free",
    button: {
      text: "Get started",
      variant: "outline" as const,
    },
  },
  {
    name: "Startup",
    button: {
      text: "Get started",
      variant: "outline" as const,
    },
  },
  {
    name: "Enterprise",
    button: {
      text: "Get a demo",
      variant: "outline" as const,
    },
  },
];

const defaultComparisonFeatures: FeatureSection[] = [
  {
    category: "Usage",
    features: [
      {
        name: "Members",
        free: "Unlimited",
        startup: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Transactions",
        free: "250",
        startup: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Teams",
        free: "2",
        startup: "Unlimited",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Features",
    features: [
      {
        name: "Reporting",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Analytics",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Import and export",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Integrations",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Mainline AI",
        free: null,
        startup: true,
        enterprise: true,
      },
      {
        name: "Admin roles",
        free: null,
        startup: null,
        enterprise: true,
      },
      {
        name: "Audit log",
        free: null,
        startup: null,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    features: [
      {
        name: "Priority Support",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Account Manager",
        free: null,
        startup: null,
        enterprise: true,
      },
      {
        name: "Uptime SLA",
        free: null,
        startup: null,
        enterprise: true,
      },
    ],
  },
];

const renderFeatureValue = (value: true | false | null | string) => {
  if (value === true) {
    return <Check className="size-5" />;
  }
  if (value === false) {
    return <X className="size-5" />;
  }
  if (value === null) {
    return null;
  }
  // String value
  return (
    <div className="flex items-center gap-2">
      <Check className="size-4" />
      <span className="text-muted-foreground">{value}</span>
    </div>
  );
};

export const PricingTable = ({
  pricingPlans = defaultPricingPlans,
  comparisonFeatures = defaultComparisonFeatures,
}: {
  pricingPlans?: any[];
  comparisonFeatures?: FeatureSection[];
}) => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Startup plan
  const activePlans = pricingPlans || defaultPricingPlans;
  const activeFeatures = comparisonFeatures || defaultComparisonFeatures;

  return (
    <section className="pb-28 lg:py-32">
      <div className="container">
        <PlanHeaders
          pricingPlans={activePlans}
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
        />
        <FeatureSections comparisonFeatures={activeFeatures} selectedPlan={selectedPlan} />
      </div>
    </section>
  );
};

const PlanHeaders = ({
  pricingPlans,
  selectedPlan,
  onPlanChange,
}: {
  pricingPlans: any[];
  selectedPlan: number;
  onPlanChange: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile View */}
      <div className="md:hidden text-start">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
          <div className="flex items-center justify-between border-b py-4">
            <CollapsibleTrigger className="flex items-center gap-2">
              <h3 className="text-2xl font-semibold">
                {pricingPlans[selectedPlan].name}
              </h3>
              <ChevronsUpDown
                className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
            <Button
              variant={pricingPlans[selectedPlan].button.variant}
              className="w-fit"
            >
              {pricingPlans[selectedPlan].button.text}
            </Button>
          </div>
          <CollapsibleContent className="flex flex-col space-y-2 p-2">
            {pricingPlans.map(
              (plan, index) =>
                index !== selectedPlan && (
                  <Button
                    size="lg"
                    variant="secondary"
                    key={index}
                    onClick={() => {
                      onPlanChange(index);
                      setIsOpen(false);
                    }}
                  >
                    {plan.name}
                  </Button>
                ),
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop View */}
      <div className="grid grid-cols-4 gap-4 max-md:hidden text-start">
        <div className="col-span-1 max-md:hidden"></div>

        {pricingPlans.map((plan, index) => (
          <div key={index} className="">
            <h3 className="mb-3 text-2xl font-semibold">{plan.name}</h3>
            <Button variant={plan.button.variant} className="">
              {plan.button.text}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureSections = ({
  comparisonFeatures,
  selectedPlan,
}: {
  comparisonFeatures: FeatureSection[];
  selectedPlan: number;
}) => (
  <>
    {comparisonFeatures.map((section, sectionIndex) => (
      <div key={sectionIndex} className="">
        <div className="border-primary/40 border-b py-4 text-start">
          <h3 className="text-lg font-semibold">{section.category}</h3>
        </div>
        {section.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="text-foreground grid grid-cols-2 font-medium max-md:border-b md:grid-cols-4"
          >
            <span className="inline-flex items-center py-4 text-start">
              {feature.name}
            </span>
            {/* Mobile View - Only Selected Plan */}
            <div className="md:hidden">
              <div className="flex items-center gap-1 py-4 md:border-b">
                {renderFeatureValue(
                  [feature.free, feature.startup, feature.enterprise][
                    selectedPlan
                  ],
                )}
              </div>
            </div>
            {/* Desktop View - All Plans */}
            <div className="hidden md:col-span-3 md:grid md:grid-cols-3 md:gap-4">
              {[feature.free, feature.startup, feature.enterprise].map(
                (value, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 border-b py-4"
                  >
                    {renderFeatureValue(value)}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
);

