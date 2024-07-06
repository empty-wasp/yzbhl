import en from "./lang/en_us";
import zh from "./lang/zh_cn";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh",
  messages: { en, zh },
}));
