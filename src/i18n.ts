import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === "de"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../messages/de.json")
        : import(`../messages/${locale}.json`))
    ).default,
    getMessageFallback() {
      return "";
    },
  };
});
