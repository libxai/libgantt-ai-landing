import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useTranslation } from "../../data/translations";

const ComparisonSection = () => {
  const [comparisonRef, isComparisonVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  const comparisonData = [
    {
      feature: t("comparison.features.aiIntegration"),
      libGantt: {
        text: t("comparison.values.native"),
        color: "text-green-400",
      },
      bryntum: { text: t("comparison.values.none"), color: "text-red-400" },
      msProject: {
        text: t("comparison.values.limited"),
        color: "text-yellow-400",
      },
      dhtmlx: { text: t("comparison.values.none"), color: "text-red-400" },
    },
    {
      feature: t("comparison.features.price"),
      libGantt: {
        text: t("comparison.values.price199"),
        color: "text-green-400",
      },
      bryntum: { text: t("comparison.values.price999"), color: "text-red-400" },
      msProject: {
        text: t("comparison.values.price300"),
        color: "text-red-400",
      },
      dhtmlx: { text: t("comparison.values.price799"), color: "text-red-400" },
    },
    {
      feature: t("comparison.features.performance"),
      libGantt: {
        text: t("comparison.values.tasks10k"),
        color: "text-green-400",
      },
      bryntum: {
        text: t("comparison.values.limited"),
        color: "text-yellow-400",
      },
      msProject: {
        text: t("comparison.values.desktopOnly"),
        color: "text-red-400",
      },
      dhtmlx: { text: t("comparison.values.basic"), color: "text-yellow-400" },
    },
    {
      feature: t("comparison.features.webNative"),
      libGantt: {
        text: t("comparison.values.complete"),
        color: "text-green-400",
      },
      bryntum: { text: t("comparison.values.yes"), color: "text-green-400" },
      msProject: {
        text: t("comparison.values.limited"),
        color: "text-yellow-400",
      },
      dhtmlx: { text: t("comparison.values.yes"), color: "text-green-400" },
    },
    {
      feature: t("comparison.features.easeOfUse"),
      libGantt: {
        text: t("comparison.values.aiAssists"),
        color: "text-green-400",
      },
      bryntum: { text: t("comparison.values.complex"), color: "text-red-400" },
      msProject: {
        text: t("comparison.values.steepCurve"),
        color: "text-red-400",
      },
      dhtmlx: {
        text: t("comparison.values.moderate"),
        color: "text-yellow-400",
      },
    },
  ];

  return (
    <section
      ref={comparisonRef}
      id="comparison"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1500 ${
            isComparisonVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1500 delay-500 ${
            isComparisonVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-white mb-6 transition-all duration-1000 ease-out ${
              isComparisonVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("comparison.title")}
          </h2>
          <p
            className={`text-xl text-slate-300 transition-all duration-1000 ease-out delay-200 ${
              isComparisonVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t("comparison.subtitle")}
          </p>
        </div>

        {/* Comparison table */}
        <div
          className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl transition-all duration-1000 ease-out delay-400 ${
            isComparisonVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  className={`border-b border-slate-700/50 transition-all duration-800 ease-out delay-600 ${
                    isComparisonVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                >
                  <th className="text-left p-6 text-slate-400 font-semibold text-lg bg-slate-700/30">
                    {t("comparison.tableHeaders.feature")}
                  </th>
                  <th className="text-center p-6 text-white font-bold text-lg bg-red-900/40 relative overflow-hidden">
                    <div
                      className={`transition-all duration-500 delay-700 ${
                        isComparisonVisible ? "scale-100" : "scale-0"
                      }`}
                    >
                      {t("comparison.tableHeaders.libGanttAI")}
                    </div>
                  </th>
                  <th className="text-center p-6 text-slate-300 font-semibold text-lg">
                    {t("comparison.tableHeaders.bryntum")}
                  </th>
                  <th className="text-center p-6 text-slate-300 font-semibold text-lg">
                    {t("comparison.tableHeaders.msProject")}
                  </th>
                  <th className="text-center p-6 text-slate-300 font-semibold text-lg">
                    {t("comparison.tableHeaders.dhtmlx")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-slate-700/30 hover:bg-slate-700/20 transition-all duration-300 hover:scale-[1.01] ${
                      isComparisonVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{
                      transitionDelay: `${800 + index * 100}ms`,
                    }}
                  >
                    <td className="p-6 text-slate-300 font-medium text-lg bg-slate-700/20 transition-all duration-300 hover:bg-slate-700/30">
                      {row.feature}
                    </td>
                    <td
                      className={`p-6 text-center font-semibold text-lg bg-red-900/20 transition-all duration-300 hover:bg-red-900/30 ${row.libGantt.color} relative`}
                    >
                      <div className="transform transition-all duration-200 hover:scale-110">
                        {row.libGantt.text}
                      </div>
                    </td>
                    <td
                      className={`p-6 text-center font-semibold text-lg transition-all duration-300 hover:bg-slate-700/10 ${row.bryntum.color}`}
                    >
                      <div className="transform transition-all duration-200 hover:scale-105">
                        {row.bryntum.text}
                      </div>
                    </td>
                    <td
                      className={`p-6 text-center font-semibold text-lg transition-all duration-300 hover:bg-slate-700/10 ${row.msProject.color}`}
                    >
                      <div className="transform transition-all duration-200 hover:scale-105">
                        {row.msProject.text}
                      </div>
                    </td>
                    <td
                      className={`p-6 text-center font-semibold text-lg transition-all duration-300 hover:bg-slate-700/10 ${row.dhtmlx.color}`}
                    >
                      <div className="transform transition-all duration-200 hover:scale-105">
                        {row.dhtmlx.text}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
