export const useAsyncConfig = async (prefix: string, suffix?: string) => {
  const lang = useCookie("lang");
  const { data: result } = await useAsyncData(
    `${prefix}/${lang.value}${suffix ? "/" + suffix : ""}`,
    () =>
      queryContent(
        `${prefix}/${lang.value}${suffix ? "/" + suffix : ""}`
      ).findOne()
  );
  if (!result.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page not found",
      fatal: true,
    });
  }
  return { result };
};
