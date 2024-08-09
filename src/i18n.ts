import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const messageModule = await import(`../messages/${locale}.json`);
  return {
    messages: messageModule.default,
    getMessageFallback() {
      return "";
    },
  };
});
