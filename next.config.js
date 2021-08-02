const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_stork: false,
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "zh-CN", "zh-HK", "jp"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs",
        statusCode: 301,
      },
    ];
  },
});
