import React from "react";
import { useTranslation } from "../../data/translations";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    product: [
      { name: t("footer.links.product.aiFeatures"), href: "#features" },
      { name: t("footer.links.product.pricing"), href: "#pricing" },
      { name: t("footer.links.product.comparison"), href: "#comparison" },
      { name: t("footer.links.product.documentation"), href: "#" },
    ],
    resources: [
      { name: t("footer.links.resources.examples"), href: "#" },
      { name: t("footer.links.resources.apiReference"), href: "#" },
      { name: t("footer.links.resources.migrationGuide"), href: "#" },
      { name: t("footer.links.resources.blog"), href: "#" },
    ],
    company: [
      { name: t("footer.links.company.about"), href: "#" },
      { name: t("footer.links.company.careers"), href: "#" },
      {
        name: t("footer.links.company.gmailContact"),
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=hello@libxai.com&su=LibGantt-AI%20Inquiry",
        external: true,
      },
      {
        name: t("footer.links.company.outlookContact"),
        href: "https://outlook.live.com/mail/0/deeplink/compose?to=hello@libxai.com&subject=LibGantt-AI%20Inquiry",
        external: true,
      },
      { name: t("footer.links.company.press"), href: "#" },
    ],
    community: [
      {
        name: t("footer.links.community.github"),
        href: "https://github.com/libxai/ganttAI",
        external: true,
      },
      { name: t("footer.links.community.twitter"), href: "#" },
      { name: t("footer.links.community.discord"), href: "#" },
      { name: t("footer.links.community.linkedin"), href: "#" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">
              {t("footer.product")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">
              {t("footer.company")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">
              {t("footer.community")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                    {link.external && (
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm mb-4">{t("footer.copyright")}</p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
            >
              {t("footer.privacyPolicy")}
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
            >
              {t("footer.termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
