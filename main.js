const fs = require("node:fs");
const path = require("node:path");

(async function () {
  const locales = [
    "af",
    "sq",
    "am",
    "ar",
    "hy",
    "az",
    "eu",
    "be",
    "bs",
    "bn",
    "bg",
    "my",
    "ca",
    "zh-hk",
    "zh-cn",
    "zh-tw",
    "hr",
    "cs",
    "da",
    "nl",
    "en",
    "et",
    "fa",
    "fil",
    "fi",
    "fr",
    "fr-ca",
    "gl",
    "ka",
    "de",
    "el",
    "gu",
    "iw",
    "hi",
    "hu",
    "is",
    "id",
    "it",
    "ja",
    "kn",
    "kk",
    "km",
    "ko",
    "ky",
    "lo",
    "lv",
    "lt",
    "mk",
    "ms",
    "ml",
    "mr",
    "mn",
    "ne",
    "no",
    "pl",
    "pt",
    "pt-br",
    "pa",
    "ro",
    "ru",
    "sr",
    "si",
    "sk",
    "sl",
    "es",
    "es-419",
    "sw",
    "sv",
    "ta",
    "te",
    "th",
    "tr",
    "ua",
    "ur",
    "uz",
    "vi",
    "zu",
  ];
  for (const locale of locales) {
    const response = await fetch(
      `https://play.google.com/intl/en_us/badges/static/images/badges/${locale}_badge_web_generic.eps`
    );
    const arrayBuffer = await response.arrayBuffer();
    fs.writeFileSync(
      path.join("eps", `${locale}.eps`),
      Buffer.from(arrayBuffer)
    );
  }
})();