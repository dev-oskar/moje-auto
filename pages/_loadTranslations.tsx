import { useRouter } from "next/router";
import translations_pl from "./i18n/pl.json";
import translations_en from "./i18n/en.json";

function loadTranslations() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  if (router.locale === "en") {
    return translations_en;
  } else {
    // Don't check for pl as it is a default language
    return translations_pl;
  }
}

export default loadTranslations;
