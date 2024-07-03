import en from "./lang/en_us.json";
import zh from "./lang/zh_cn.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh",
  messages: { en, zh },
}));
