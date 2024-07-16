import { langOptions } from "@/lang/base";

export const useLanguage = () => {
  const appConfig = useAppConfig();

  const _lang = useCookie("lang");

  const options = langOptions.map((it) => it.value);
  const language = ref(_lang.value || appConfig.lang);

  const [defLang] = langOptions.filter((it) => it.key === language.value);
  const lang = ref<string>(defLang.value || options[0]);

  const setLang = async (v: string) => {
    const [actItem]: any = langOptions.filter((it) => it.value === v);
    lang.value = v;
    _lang.value = actItem.key;
    // 切换语言刷新页面
    reloadNuxtApp({ ttl: 1000 });
  };
  return { setLang, lang, options, language };
};
