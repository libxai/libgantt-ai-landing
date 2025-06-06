import { useLanguage } from "../hooks/useLanguage";

export const translations = {
  en: {
    nav: {
      home: "Home",
      aiFeatures: "AI Features",
      comparison: "Comparison",
      pricing: "Pricing",
      useCases: "Use Cases",
      code: "Code",
    },
    hero: {
      title: "LibGantt-AI",
      subtitle: "The World's First AI-Powered Gantt Library",
      description:
        "While traditional libraries just display schedules, LibGantt-AI acts as an intelligent assistant that helps plan, optimize and manage projects proactively.",
      pricingBadge: "Starting at $199 per project",
      getStarted: "GET STARTED",
      seeFeatures: "SEE AI FEATURES",
    },
    features: {
      title: "Revolutionary AI Features",
      subtitle:
        "Experience the future of project management with AI that actually understands your needs",
      automaticSchedule: {
        title: "Automatic Schedule Generation",
        description:
          "Describe your project in natural language, and AI generates a complete Gantt chart with tasks, dependencies, and resource allocation.",
        example:
          '"Create a mobile food delivery app, launch in 6 months" → AI generates 47 organized tasks with dependencies',
      },
      intelligentAssistant: {
        title: "Intelligent Contextual Assistant",
        description:
          "AI proactively detects problems before they occur and suggests solutions, continuously monitoring for efficiency improvements.",
        example:
          '"Reassign Maria from Task A to Task B would reduce total time by 3 days"',
      },
      predictiveAnalytics: {
        title: "Advanced Predictive Analytics",
        description:
          'AI predicts completion dates with confidence intervals, identifies risk patterns, and simulates "what if" scenarios automatically.',
        example:
          '"Optimistic: March 15 | Realistic: March 28 | Pessimistic: April 10"',
      },
    },
    comparison: {
      title: "Why Choose LibGantt-AI?",
      subtitle: "See how we compare against the competition",
      tableHeaders: {
        feature: "Feature",
        libGanttAI: "LibGantt-AI",
        bryntum: "Bryntum",
        msProject: "MS Project",
        dhtmlx: "DHTMLX",
      },
      features: {
        aiIntegration: "🤖 AI Integration",
        price: "💰 Price",
        performance: "⚡ Performance",
        webNative: "🌐 Web Native",
        easeOfUse: "💎 Ease of Use",
      },
      values: {
        native: "✓ Native",
        none: "✗ None",
        limited: "~ Limited",
        price199: "✓ $199/project",
        price999: "✗ $999+/year",
        price300: "✗ $300+/user",
        price799: "✗ $799+/year",
        tasks10k: "✓ 10K+ tasks",
        desktopOnly: "✗ Desktop only",
        basic: "~ Basic",
        complete: "✓ Complete",
        yes: "✓ Yes",
        aiAssists: "✓ AI assists",
        complex: "✗ Complex",
        steepCurve: "✗ Steep curve",
        moderate: "~ Moderate",
      },
    },
    pricing: {
      title: "Simple Pricing",
      subtitle:
        "Start free with open source. Scale with commercial licenses. No per-user fees.",
      mostPopular: "Most Popular",
      plans: {
        openSource: {
          name: "Open Source",
          price: "$0",
          description: "Perfect for evaluation",
          buttonText: "DOWNLOAD FREE",
          features: {
            coreFeatures: "All core Gantt features",
            communitySupport: "Community support",
            mitLicense: "MIT License",
            aiFeatures: "AI features",
          },
        },
        professional: {
          name: "Professional",
          price: "$199",
          description: "Per project license",
          buttonText: "BUY LICENSE",
          features: {
            everythingOpenSource: "Everything in Open Source",
            fullAiFeatures: "Full AI features",
            commercialLicense: "Commercial license",
            emailSupport: "Email support",
            exportFeatures: "Export to PDF, Excel",
          },
        },
        enterprise: {
          name: "Enterprise",
          price: "$599",
          description: "Per project enterprise",
          buttonText: "CONTACT SALES",
          features: {
            everythingProfessional: "Everything in Professional",
            whiteLabel: "White-label licensing",
            prioritySupport: "Priority support (4h)",
            customIntegrations: "Custom integrations",
            accountManager: "Dedicated account manager",
          },
        },
      },
    },
    useCases: {
      title: "Real Use Cases",
      subtitle:
        "See how companies are already revolutionizing their project management",
      cases: {
        softwareDevelopment: {
          title: "Software Development",
          description:
            "AI estimates development tasks, detects bottlenecks, optimizes sprints automatically. Perfect for agile teams who need realistic planning.",
          metrics: {
            lessOverruns: "40% less overruns",
            fasterDelivery: "25% faster delivery",
          },
        },
        consultingFirms: {
          title: "Consulting Firms",
          description:
            "AI optimizes cross-project resource allocation, predicts profitability per client. Manage multiple client projects efficiently.",
          metrics: {
            betterUtilization: "30% better utilization",
            marginIncrease: "20% margin increase",
          },
        },
        constructionEngineering: {
          title: "Construction & Engineering",
          description:
            "AI simulates scenarios, optimizes critical path, predicts weather risks. Handle complex dependencies with confidence.",
          metrics: {
            timeReduction: "15% time reduction",
            fewerDelays: "25% fewer delays",
          },
        },
        marketingAgencies: {
          title: "Marketing Agencies",
          description:
            "AI balances creative workloads, predicts production bottlenecks. Deliver campaigns on time, every time.",
          metrics: {
            onTimeDelivery: "30% on-time delivery",
            lessStress: "25% less stress",
          },
        },
      },
    },
    code: {
      title: "Get Started in Minutes",
      description:
        "LibGantt-AI is designed for developers who want powerful AI features without the complexity. Works with any framework.",
      viewDocs: "VIEW DOCUMENTATION",
      starGithub: "STAR ON GITHUB",
      example: {
        description: "Build e-commerce platform, launch in 4 months",
        comment: "AI will automatically generate",
        features: {
          taskBreakdown: "Complete task breakdown",
          resourceAllocation: "Resource allocation",
          timelineOptimization: "Timeline optimization",
          riskPredictions: "Risk predictions",
        },
      },
    },
    cta: {
      title: "Ready to Build the Future?",
      description:
        "Join thousands of developers already using LibGantt-AI to create intelligent, AI-powered project management experiences.",
      startFree: "START FREE TODAY",
      talkSales: "TALK TO SALES",
    },
    footer: {
      product: "Product",
      resources: "Resources",
      company: "Company",
      community: "Community",
      copyright: "© 2025 LibxAI. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      links: {
        product: {
          aiFeatures: "AI Features",
          pricing: "Pricing",
          comparison: "Comparison",
          documentation: "Documentation",
        },
        resources: {
          examples: "Examples",
          apiReference: "API Reference",
          migrationGuide: "Migration Guide",
          blog: "Blog",
        },
        company: {
          about: "About",
          careers: "Careers",
          contact: "Contact",
          gmailContact: "Contact me by Gmail",
          outlookContact: "Contact me by Outlook",
          press: "Press",
        },
        community: {
          github: "GitHub",
          twitter: "Twitter",
          discord: "Discord",
          linkedin: "LinkedIn",
        },
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      aiFeatures: "Funciones IA",
      comparison: "Comparación",
      pricing: "Precios",
      useCases: "Casos de Uso",
      code: "Código",
    },
    hero: {
      title: "LibGantt-AI",
      subtitle: "La Primera Librería Gantt Potenciada por IA del Mundo",
      description:
        "Mientras las librerías tradicionales solo muestran cronogramas, LibGantt-AI actúa como un asistente inteligente que ayuda a planificar, optimizar y gestionar proyectos de forma proactiva.",
      pricingBadge: "Desde $199 por proyecto",
      getStarted: "COMENZAR",
      seeFeatures: "VER FUNCIONES IA",
    },
    features: {
      title: "Funciones IA Revolucionarias",
      subtitle:
        "Experimenta el futuro de la gestión de proyectos con IA que realmente entiende tus necesidades",
      automaticSchedule: {
        title: "Generación Automática de Cronogramas",
        description:
          "Describe tu proyecto en lenguaje natural, y la IA genera un diagrama de Gantt completo con tareas, dependencias y asignación de recursos.",
        example:
          '"Crear una app de entrega de comida, lanzar en 6 meses" → IA genera 47 tareas organizadas con dependencias',
      },
      intelligentAssistant: {
        title: "Asistente Contextual Inteligente",
        description:
          "La IA detecta problemas de forma proactiva antes de que ocurran y sugiere soluciones, monitoreando continuamente mejoras de eficiencia.",
        example:
          '"Reasignar a María de la Tarea A a la Tarea B reduciría el tiempo total en 3 días"',
      },
      predictiveAnalytics: {
        title: "Análisis Predictivo Avanzado",
        description:
          'La IA predice fechas de finalización con intervalos de confianza, identifica patrones de riesgo y simula escenarios "qué pasaría si" automáticamente.',
        example:
          '"Optimista: 15 Marzo | Realista: 28 Marzo | Pesimista: 10 Abril"',
      },
    },
    comparison: {
      title: "¿Por Qué Elegir LibGantt-AI?",
      subtitle: "Mira cómo nos comparamos con la competencia",
      tableHeaders: {
        feature: "Característica",
        libGanttAI: "LibGantt-AI",
        bryntum: "Bryntum",
        msProject: "MS Project",
        dhtmlx: "DHTMLX",
      },
      features: {
        aiIntegration: "🤖 Integración IA",
        price: "💰 Precio",
        performance: "⚡ Rendimiento",
        webNative: "🌐 Web Nativo",
        easeOfUse: "💎 Facilidad de Uso",
      },
      values: {
        native: "✓ Nativo",
        none: "✗ Ninguno",
        limited: "~ Limitado",
        price199: "✓ $199/proyecto",
        price999: "✗ $999+/año",
        price300: "✗ $300+/usuario",
        price799: "✗ $799+/año",
        tasks10k: "✓ 10K+ tareas",
        desktopOnly: "✗ Solo escritorio",
        basic: "~ Básico",
        complete: "✓ Completo",
        yes: "✓ Sí",
        aiAssists: "✓ IA asiste",
        complex: "✗ Complejo",
        steepCurve: "✗ Curva empinada",
        moderate: "~ Moderado",
      },
    },
    pricing: {
      title: "Precios Simples",
      subtitle:
        "Comienza gratis con código abierto. Escala con licencias comerciales. Sin tarifas por usuario.",
      mostPopular: "Más Popular",
      plans: {
        openSource: {
          name: "Código Abierto",
          price: "$0",
          description: "Perfecto para evaluación",
          buttonText: "DESCARGAR GRATIS",
          features: {
            coreFeatures: "Todas las funciones Gantt básicas",
            communitySupport: "Soporte de la comunidad",
            mitLicense: "Licencia MIT",
            aiFeatures: "Funciones IA",
          },
        },
        professional: {
          name: "Profesional",
          price: "$199",
          description: "Licencia por proyecto",
          buttonText: "COMPRAR LICENCIA",
          features: {
            everythingOpenSource: "Todo en Código Abierto",
            fullAiFeatures: "Funciones IA completas",
            commercialLicense: "Licencia comercial",
            emailSupport: "Soporte por email",
            exportFeatures: "Exportar a PDF, Excel",
          },
        },
        enterprise: {
          name: "Empresarial",
          price: "$599",
          description: "Por proyecto empresarial",
          buttonText: "CONTACTAR VENTAS",
          features: {
            everythingProfessional: "Todo en Profesional",
            whiteLabel: "Licenciamiento de marca blanca",
            prioritySupport: "Soporte prioritario (4h)",
            customIntegrations: "Integraciones personalizadas",
            accountManager: "Gerente de cuenta dedicado",
          },
        },
      },
    },
    useCases: {
      title: "Casos de Uso Reales",
      subtitle:
        "Mira cómo las empresas ya están revolucionando su gestión de proyectos",
      cases: {
        softwareDevelopment: {
          title: "Desarrollo de Software",
          description:
            "La IA estima tareas de desarrollo, detecta cuellos de botella, optimiza sprints automáticamente. Perfecto para equipos ágiles que necesitan planificación realista.",
          metrics: {
            lessOverruns: "40% menos excesos",
            fasterDelivery: "25% entrega más rápida",
          },
        },
        consultingFirms: {
          title: "Firmas de Consultoría",
          description:
            "La IA optimiza la asignación de recursos entre proyectos, predice la rentabilidad por cliente. Gestiona múltiples proyectos de clientes eficientemente.",
          metrics: {
            betterUtilization: "30% mejor utilización",
            marginIncrease: "20% aumento de margen",
          },
        },
        constructionEngineering: {
          title: "Construcción e Ingeniería",
          description:
            "La IA simula escenarios, optimiza la ruta crítica, predice riesgos climáticos. Maneja dependencias complejas con confianza.",
          metrics: {
            timeReduction: "15% reducción de tiempo",
            fewerDelays: "25% menos retrasos",
          },
        },
        marketingAgencies: {
          title: "Agencias de Marketing",
          description:
            "La IA equilibra cargas de trabajo creativo, predice cuellos de botella de producción. Entrega campañas a tiempo, siempre.",
          metrics: {
            onTimeDelivery: "30% entrega a tiempo",
            lessStress: "25% menos estrés",
          },
        },
      },
    },
    code: {
      title: "Comienza en Minutos",
      description:
        "LibGantt-AI está diseñado para desarrolladores que quieren funciones IA poderosas sin la complejidad. Funciona con cualquier framework.",
      viewDocs: "VER DOCUMENTACIÓN",
      starGithub: "STAR EN GITHUB",
      example: {
        description: "Construir plataforma e-commerce, lanzar en 4 meses",
        comment: "IA generará automáticamente",
        features: {
          taskBreakdown: "Desglose completo de tareas",
          resourceAllocation: "Asignación de recursos",
          timelineOptimization: "Optimización de cronograma",
          riskPredictions: "Predicciones de riesgo",
        },
      },
    },
    cta: {
      title: "¿Listo para Construir el Futuro?",
      description:
        "Únete a miles de desarrolladores que ya usan LibGantt-AI para crear experiencias inteligentes de gestión de proyectos potenciadas por IA.",
      startFree: "COMENZAR GRATIS HOY",
      talkSales: "HABLAR CON VENTAS",
    },
    footer: {
      product: "Producto",
      resources: "Recursos",
      company: "Empresa",
      community: "Comunidad",
      copyright: "© 2025 LibAI. Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      links: {
        product: {
          aiFeatures: "Funciones IA",
          pricing: "Precios",
          comparison: "Comparación",
          documentation: "Documentación",
        },
        resources: {
          examples: "Ejemplos",
          apiReference: "Referencia API",
          migrationGuide: "Guía de Migración",
          blog: "Blog",
        },
        company: {
          about: "Acerca de",
          careers: "Carreras",
          contact: "Contacto",
          gmailContact: "Contáctame por Gmail",
          outlookContact: "Contáctame por Outlook",
          press: "Prensa",
        },
        community: {
          github: "GitHub",
          twitter: "Twitter",
          discord: "Discord",
          linkedin: "LinkedIn",
        },
      },
    },
  },
};

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLanguage];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t };
};
