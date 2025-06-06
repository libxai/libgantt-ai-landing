import React from "react";
import { useTranslation } from "../../data/translations";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          {t("cta.title")}
        </h2>

        {/* Description */}
        <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t("cta.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105">
            <span className="mr-3">🚀</span>
            {t("cta.startFree")}
          </button>
          <button className="flex items-center border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-semibold text-xl hover:bg-white/20 transition-all duration-200 shadow-xl">
            <span className="mr-3">💬</span>
            {t("cta.talkSales")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
