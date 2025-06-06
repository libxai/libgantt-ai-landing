import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useTranslation } from "../../data/translations";

const PricingCard = ({ plan, isHighlighted, index }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 ${
        isHighlighted
          ? "bg-purple-700/40 border-2 border-orange-500 shadow-2xl hover:shadow-orange-500/25"
          : "bg-purple-700/30 border border-purple-600/50 shadow-lg hover:shadow-xl"
      } backdrop-blur-sm`}
    >
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
            {t("pricing.mostPopular")}
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 hover:text-orange-300">
          {plan.name}
        </h3>
        <div className="mb-4">
          <span
            className={`text-5xl font-bold text-orange-400 transition-all duration-300 ${
              isHighlighted ? "hover:scale-110" : "hover:scale-105"
            } inline-block`}
          >
            {plan.price}
          </span>
        </div>
        <p className="text-purple-200 text-lg">{plan.description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <li
            key={featureIndex}
            className="flex items-center group transition-all duration-200 hover:translate-x-1"
          >
            <svg
              className="w-5 h-5 mr-3 text-green-400 transition-all duration-200 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-purple-100 group-hover:text-white transition-colors duration-200">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
          isHighlighted
            ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/50"
            : "bg-purple-600/50 text-white hover:bg-purple-600/70 border border-purple-500 hover:border-purple-400"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

const PricingSection = () => {
  const [pricingRef, isPricingVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  const pricingData = [
    {
      name: t("pricing.plans.openSource.name"),
      price: t("pricing.plans.openSource.price"),
      description: t("pricing.plans.openSource.description"),
      features: [
        t("pricing.plans.openSource.features.coreFeatures"),
        t("pricing.plans.openSource.features.communitySupport"),
        t("pricing.plans.openSource.features.mitLicense"),
        t("pricing.plans.openSource.features.aiFeatures"),
      ],
      highlighted: false,
      buttonText: t("pricing.plans.openSource.buttonText"),
    },
    {
      name: t("pricing.plans.professional.name"),
      price: t("pricing.plans.professional.price"),
      description: t("pricing.plans.professional.description"),
      features: [
        t("pricing.plans.professional.features.everythingOpenSource"),
        t("pricing.plans.professional.features.fullAiFeatures"),
        t("pricing.plans.professional.features.commercialLicense"),
        t("pricing.plans.professional.features.emailSupport"),
        t("pricing.plans.professional.features.exportFeatures"),
      ],
      highlighted: true,
      buttonText: t("pricing.plans.professional.buttonText"),
    },
    {
      name: t("pricing.plans.enterprise.name"),
      price: t("pricing.plans.enterprise.price"),
      description: t("pricing.plans.enterprise.description"),
      features: [
        t("pricing.plans.enterprise.features.everythingProfessional"),
        t("pricing.plans.enterprise.features.whiteLabel"),
        t("pricing.plans.enterprise.features.prioritySupport"),
        t("pricing.plans.enterprise.features.customIntegrations"),
        t("pricing.plans.enterprise.features.accountManager"),
      ],
      highlighted: false,
      buttonText: t("pricing.plans.enterprise.buttonText"),
    },
  ];

  return (
    <section
      ref={pricingRef}
      id="pricing"
      className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl transition-all duration-1500 ${
            isPricingVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-10 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl transition-all duration-1500 delay-300 ${
            isPricingVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-2000 delay-500 ${
            isPricingVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-white mb-6 transition-all duration-1000 ease-out ${
              isPricingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("pricing.title")}
          </h2>
          <p
            className={`text-xl text-purple-100 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-200 ${
              isPricingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isPricingVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              } ${plan.highlighted ? "md:-translate-y-4" : ""}`}
              style={{
                transitionDelay: `${400 + index * 150}ms`,
              }}
            >
              <PricingCard
                plan={plan}
                isHighlighted={plan.highlighted}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
