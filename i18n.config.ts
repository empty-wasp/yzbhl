import en from "./src/lang/en_us";
import zh from "./src/lang/zh_cn";

export default defineI18nConfig(() => {
  const lang = useCookie("lang");
  if (!lang.value) lang.value = "zh";
  return {
    legacy: false,
    locale: lang.value || "zh",
    messages: { en, zh },
  };
});
