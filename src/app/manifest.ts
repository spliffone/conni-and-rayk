import { getTranslations } from "next-intl/server";
import { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = "de";
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    name: t("title"),
    start_url: "/",
  };
}
