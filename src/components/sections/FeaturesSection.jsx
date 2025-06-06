import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useTranslation } from "../../data/translations";

const FeatureCard = ({
  icon,
  title,
  description,
  example,
  borderColor,
  index,
}) => {
  return (
    <div
      className={`bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl`}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="text-5xl mb-6 transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-300 leading-relaxed mb-6 text-lg">
        {description}
      </p>

      {/* Example box */}
      <div
        className={`bg-slate-800/70 rounded-lg p-4 border-l-4 ${borderColor} transform transition-all duration-300 hover:bg-slate-800/90`}
      >
        <p className="text-slate-200 italic text-sm leading-relaxed">
          {example}
        </p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const [featuresRef, isFeaturesVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  const featuresData = [
    {
      icon: "🧠",
      title: t("features.automaticSchedule.title"),
      description: t("features.automaticSchedule.description"),
      example: t("features.automaticSchedule.example"),
      borderColor: "border-pink-500",
    },
    {
      icon: "🎯",
      title: t("features.intelligentAssistant.title"),
      description: t("features.intelligentAssistant.description"),
      example: t("features.intelligentAssistant.example"),
      borderColor: "border-red-500",
    },
    {
      icon: "👤",
      title: t("features.predictiveAnalytics.title"),
      description: t("features.predictiveAnalytics.description"),
      example: t("features.predictiveAnalytics.example"),
      borderColor: "border-orange-500",
    },
  ];

  return (
    <section
      ref={featuresRef}
      id="features"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1500 ${
            isFeaturesVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl transition-all duration-1500 delay-300 ${
            isFeaturesVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-white mb-6 transition-all duration-1000 ease-out ${
              isFeaturesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("features.title")}
          </h2>
          <p
            className={`text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-200 ${
              isFeaturesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isFeaturesVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                transitionDelay: `${400 + index * 150}ms`,
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                example={feature.example}
                borderColor={feature.borderColor}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
