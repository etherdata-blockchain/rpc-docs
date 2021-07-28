import { useRouter } from "next/router";

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "Blockchain Documentation",
  "zh-CN": "区块链文档",
};

export default {
  titleSuffix: " – ETD",
  search: false,
  unstable_stork: true,
  repository: "https://github.com/etherdata/etd-website",
  docsRepository: "https://github.com/etherdata/etd-website",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <img src="/favicon.ico" width="40" />
        <span className="mx-2 font-extrabold hidden md:inline select-none">
          ETD
        </span>
        <span className="text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap">
          {TITLE_WITH_TRANSLATIONS[locale]}
        </span>
      </>
    );
  },
  head: (
    <>
      {/* Favicons, meta */}
      <link rel="icon" type="image/png" sizes="16x16" href="favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="ETD Blockchain Documentation" />
      <meta name="og:description" content="ETD Blockchain Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:image" content="favicon.ico" />
      <meta name="og:title" content="ETD: Next Gen Blockchain" />
      <meta name="og:image" content="favicon.ico" />
      <meta
        name="apple-mobile-web-app-title"
        content="ETD Blockchain Documentation"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        media="print"
        onLoad="this.media='all'"
      />
    </>
  ),
  footer: false,
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "简体中文" },
    { locale: "zh-HK", text: "繁体中文" },
    { locale: "jp", text: "日本" },
  ],
};
