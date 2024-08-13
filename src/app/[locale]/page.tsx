import Timeline, { TimelineListProps } from "../components/Timeline";
import { unstable_setRequestLocale } from "next-intl/server";
import SectionWrapper from "../components/SectionWrapper";
import Accommodations from "../components/Accommodations";
import LocationMap from "../components/LocationMap";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import { playfairDisplay } from "@/fonts";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const navigation = [
    { title: t("home.title"), id: "home", href: "#home" },
    { title: t("location.title"), id: "location", href: "#location" },
    {
      title: t("accommodation.title"),
      id: "accommodation",
      href: "#accommodation",
    },
    {
      title: t("program.title"),
      id: "program",
      href: "#program",
    },
  ];

  const timeline: TimelineListProps = [
    {
      title: t("program.reception"),
      subtitle: t("program.receptionSubtitle"),
      time: "12:30",
    },
    {
      title: t("program.ceremony"),
      subtitle: t("program.ceremonySubtitle"),
      time: "13:30",
    },
    {
      title: t("program.teatime"),
      subtitle: t("program.teatimeSubtitle"),
      time: "15:00",
    },
    {
      title: t("program.dinner"),
      subtitle: t("program.dinnerSubtitle"),
      time: "19:00",
    },
    {
      title: t("program.party"),
      subtitle: t("program.partySubtitle"),
      time: "21:00",
    },
    {
      title: t("program.end"),
      subtitle: "",
      time: "02:00",
    },
  ];
  return (
    //${playFairFont.className}
    <main
      className={`viewshell bg-background-2`}
    >
      <Header links={navigation} />
      <section id="home" className="bg-cover bg-center pb-14">
        <div className="flex h-screen flex-col items-center justify-center md:h-[750px]">
          <div className="flex h-auto w-full flex-col px-8 py-3.5 text-center">
            <p className="font-sans text-lg text-gray-700">
              {t("home.subtitle")}
            </p>
            <h4 className={`${playfairDisplay.className} mb-4 mt-6 text-5xl`}>
              {t("home.couple")}
            </h4>
            <p className="font-sans text-lg text-gray-700">
              {t("home.date")}
            </p>
            <p className="pt-3 font-sans text-lg text-gray-700">
              {t("home.time")}
            </p>
            <p className="pt-3 text-lg text-gray-700">
              {t("home.claim")}
            </p>
          </div>
        </div>
      </section>
      <section id="location" className="pb-14">
        <SectionWrapper>
          <LocationMap
            title={t("location.title")}
            name={t("location.name")}
            address={t("location.address")}
            mapsPosition="Draustoana+Stadl+Gumpertsham,Gumpertsham,Babensham,Deutschland"
            openMapTitle={t("location.openMap")}
          />
        </SectionWrapper>
      </section>
      <section id="accommodation" className="pb-14">
        <SectionWrapper>
          <Accommodations
            title={t("accommodation.title")}
            info={t("accommodation.info")}
            distanceTitle={t("accommodation.distance")}
            websiteTitle={t("accommodation.website")}
            mapsTitle={t("accommodation.maps")}
          />
        </SectionWrapper>
      </section>
      <section id="program" className="pb-14">
        <SectionWrapper>
          <Timeline title={t("program.title")} entries={timeline} />
        </SectionWrapper>
      </section>
      <div className="relative bg-background py-24 text-center font-sans text-gray-700">
        {`© ${new Date().getFullYear()} by `}
        <span className="font-semibold">{"Spliffone"}</span>
      </div>
    </main>
  );
}
