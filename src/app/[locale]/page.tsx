import Timeline, { TimelineListProps } from "../components/Timeline";
import SectionWrapper from "../components/SectionWrapper";
import Accommodations from "../components/Accommodations";
import LocationMap from "../components/LocationMap";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import { playfairDisplay } from "@/fonts";
import { use } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("title") };
}

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);
  const t = useTranslations();
  const navigation = [
    { title: t("home.title"), id: "home", href: "#home" },
    { title: t("location.title"), id: "location", href: "#location" },
    {
      title: t("arrivalDeparture.title"),
      id: "arrival-departure",
      href: "#arrival-departure",
    },
    {
      title: t("accommodation.title"),
      id: "accommodation",
      href: "#accommodation",
    },
    { title: t("program.title"), id: "program", href: "#program" },
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
    { title: t("program.end"), subtitle: "", time: "02:00" },
  ];
  return (
    //${playFairFont.className}
    <main className={`viewshell bg-background-2`}>
      <Header links={navigation} />
      <section id="home" className="bg-cover bg-center pb-14">
        <div className="flex h-screen flex-col items-center justify-center md:h-[750px]">
          <div className="flex h-auto w-full flex-col px-8 py-3.5 text-center">
            <p className={`${playfairDisplay.className} text-xl text-gray-700`}>
              {t("home.subtitle")}
            </p>
            <h4
              className={`${playfairDisplay.className} mt-6 mb-4 text-5xl font-bold`}
            >
              {t("home.couple")}
            </h4>
            <p className={`${playfairDisplay.className} text-xl text-gray-700`}>
              {t("home.date")}
            </p>
            <p
              className={`${playfairDisplay.className} pt-8 text-xl text-gray-700`}
            >
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
      <section id="arrival-departure" className="pb-14">
        <SectionWrapper>
          <div className="relative flex w-full flex-col px-8">
            <h2 className="font-head text-center text-4xl font-extrabold">
              {t("arrivalDeparture.title")}
            </h2>
            <p className="py-3.5 text-center font-sans text-lg text-gray-700">
              {t("arrivalDeparture.description")}
            </p>
          </div>
        </SectionWrapper>
      </section>
      <section id="accommodation" className="pb-14">
        <SectionWrapper>
          <Accommodations
            title={t("accommodation.title")}
            info={[t("accommodation.info1"), t("accommodation.info2")]}
            distanceTitle={t("accommodation.distance")}
            websiteTitle={t("accommodation.website")}
            mapsTitle={t("accommodation.maps")}
          />
        </SectionWrapper>
      </section>
      <section id="program" className="pb-14">
        <SectionWrapper>
          <Timeline
            title={t("program.title")}
            description={t("program.description")}
            entries={timeline}
          />
        </SectionWrapper>
      </section>
      <div className="bg-background relative py-24 text-center font-sans text-gray-700">
        {`© ${new Date().getFullYear()} by `}
        <span className="font-semibold">{"Spliffone"}</span>
      </div>
    </main>
  );
}
