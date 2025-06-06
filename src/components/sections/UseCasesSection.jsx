import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useTranslation } from "../../data/translations";

const UseCaseCard = ({ icon, title, description, metrics, index }) => {
  return (
    <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl group">
      <div className="text-5xl mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-blue-300">
        {title}
      </h3>
      <p className="text-slate-300 leading-relaxed mb-8 text-lg group-hover:text-slate-200 transition-colors duration-300">
        {description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, metricIndex) => (
          <div
            key={metricIndex}
            className={`px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer ${metric.color} hover:shadow-lg`}
            style={{
              animationDelay: `${index * 200 + metricIndex * 100}ms`,
            }}
          >
            <div className="text-white font-semibold text-sm transition-all duration-200 hover:text-yellow-200">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UseCasesSection = () => {
  const [useCasesRef, isUseCasesVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  const useCasesData = [
    {
      icon: "💻",
      title: t("useCases.cases.softwareDevelopment.title"),
      description: t("useCases.cases.softwareDevelopment.description"),
      metrics: [
        {
          label: t("useCases.cases.softwareDevelopment.metrics.lessOverruns"),
          color: "bg-red-600/80 hover:bg-red-500/90",
        },
        {
          label: t("useCases.cases.softwareDevelopment.metrics.fasterDelivery"),
          color: "bg-green-600/80 hover:bg-green-500/90",
        },
      ],
    },
    {
      icon: "🏢",
      title: t("useCases.cases.consultingFirms.title"),
      description: t("useCases.cases.consultingFirms.description"),
      metrics: [
        {
          label: t("useCases.cases.consultingFirms.metrics.betterUtilization"),
          color: "bg-green-600/80 hover:bg-green-500/90",
        },
        {
          label: t("useCases.cases.consultingFirms.metrics.marginIncrease"),
          color: "bg-green-600/80 hover:bg-green-500/90",
        },
      ],
    },
    {
      icon: "🏗️",
      title: t("useCases.cases.constructionEngineering.title"),
      description: t("useCases.cases.constructionEngineering.description"),
      metrics: [
        {
          label: t(
            "useCases.cases.constructionEngineering.metrics.timeReduction"
          ),
          color: "bg-green-600/80 hover:bg-green-500/90",
        },
        {
          label: t(
            "useCases.cases.constructionEngineering.metrics.fewerDelays"
          ),
          color: "bg-green-600/80 hover:bg-green-500/90",
        },
      ],
    },
    {
      icon: "🎨",
      title: t("useCases.cases.marketingAgencies.title"),
      description: t("useCases.cases.marketingAgencies.description"),
      metrics: [
        {
          label: t("useCases.cases.marketingAgencies.metrics.onTimeDelivery"),
          color: "bg-green-600/80 hover:bg-green-500/90",
        },
        {
          label: t("useCases.cases.marketingAgencies.metrics.lessStress"),
          color: "bg-green-600/80 hover:bg-green-500/90",
        },
      ],
    },
  ];

  return (
    <section
      ref={useCasesRef}
      id="use-cases"
      className="py-20 bg-slate-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 left-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl transition-all duration-1500 ${
            isUseCasesVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl transition-all duration-1500 delay-300 ${
            isUseCasesVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl transition-all duration-2000 delay-600 ${
            isUseCasesVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-white mb-6 transition-all duration-1000 ease-out ${
              isUseCasesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("useCases.title")}
          </h2>
          <p
            className={`text-xl text-slate-300 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-200 ${
              isUseCasesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("useCases.subtitle")}
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCasesData.map((useCase, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isUseCasesVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                transitionDelay: `${400 + index * 150}ms`,
              }}
            >
              <UseCaseCard
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                metrics={useCase.metrics}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
