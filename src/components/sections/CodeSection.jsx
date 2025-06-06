import React from "react";
import { useTranslation } from "../../data/translations";

const CodeSection = () => {
  const { t } = useTranslation();

  const codeExample = `// Install LibGantt-AI
npm install libgantt-ai

// Initialize UI
import { LibGanttAI } from 'libgantt-ai';

const gantt = new LibGanttAI({
  container: '#gantt-container',
  aiEnabled: true,
  autoOptimize: true
});

// Natural language project creation
gantt.ai.createProject({
  description: "${t("code.example.description")}",
  team: ["Frontend", "Backend", "Design"],
  budget: 50000
});

// ${t("code.example.comment")}:
// - ${t("code.example.features.taskBreakdown")}
// - ${t("code.example.features.resourceAllocation")}
// - ${t("code.example.features.timelineOptimization")}
// - ${t("code.example.features.riskPredictions")}`;

  return (
    <section id="code" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-6">
              {t("code.title")}
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {t("code.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-xl">
                📖 {t("code.viewDocs")}
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 border border-slate-600">
                ⭐ {t("code.starGithub")}
              </button>
            </div>
          </div>

          {/* Right side - Code example */}
          <div className="relative">
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
              {/* Code header */}
              <div className="bg-slate-700 px-4 py-3 border-b border-slate-600">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-slate-400 text-sm font-medium">
                    JavaScript
                  </div>
                </div>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-slate-300 leading-relaxed">
                  {codeExample}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
