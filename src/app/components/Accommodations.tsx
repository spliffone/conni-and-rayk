import Image from "next/image";

export interface CardProps {
  /** The text to display */
  title: string;
  /** The image src href */
  src: string;
  /** Website link */
  website: string;
  /** Maps link */
  maps: string;

  distance: string;
}

const accommodations: CardProps[] = [
  {
    title: "Gartlacher Hof",
    website: "http://www.gartlacher-hof.de/",
    src: "/images/gartlacher-hof.jpg",
    maps: "https://maps.app.goo.gl/atJcD71eKkPrSFMV9",
    distance: "< 8 km",
  },
  {
    title: "Huberwirt am Kellerberg",
    website: "https://www.huberwirtamkellerberg.de/",
    src: "/images/huberwirtamkellerberg.jpg",
    maps: "https://maps.app.goo.gl/cAwKwU4g7YctduiE7",
    distance: "< 8 km",
  },
  {
    title: "Land Wirtschaft",
    website: "https://www.landwirtschaft-staudham.de/",
    src: "/images/landwirtschaft-staudham.jpg",
    maps: "https://maps.app.goo.gl/Z6c8hvNczhCxVaky8",
    distance: "< 13 km",
  },
  {
    title: "Hotel Fletzinger",
    website: "https://fletzinger.de/",
    src: "/images/hotel-fletzinger.jpg",
    maps: "https://maps.app.goo.gl/4uxNGHzEPACcpEjo7",
    distance: "< 14 km",
  },
  {
    title: "Paulanerstuben",
    website: "https://www.paulanerstuben-wasserburg.de/",
    src: "/images/paulanerstuben-wasserburg.jpg",
    maps: "https://maps.app.goo.gl/T2ZyFACsHAhg1NPH8",
    distance: "< 14 km",
  },
  {
    title: "Schellenberger-Hof",
    website: "https://schellenberger-hof.de/",
    src: "/images/schellenberger-hof.jpg",
    maps: "https://maps.app.goo.gl/pmKJbCj5y6vkqgH76",
    distance: "< 15 km",
  },
  {
    title: "Gasthof zur Post",
    website: "http://www.gasthof-zur-post-schonstett.de/",
    src: "/images/gasthof-zur-post-schonstett.jpg",
    maps: "https://maps.app.goo.gl/oxRgMjuoxg3ZoffF7",
    distance: "< 17 km",
  },
];

export interface AccommodationsProps {
  title: string;
  info: string;
  distanceTitle: string;
  websiteTitle: string;
  mapsTitle: string;
}

export const Accommodations = ({
  title,
  info,
  distanceTitle,
  websiteTitle,
  mapsTitle,
}: AccommodationsProps) => {
  return (
    <div className="relative flex w-full flex-col px-8">
      <h2 className="text-center font-head text-4xl font-extrabold dark:text-white">
        {title}
      </h2>
      <p className="py-3.5 text-center font-sans text-lg text-gray-700 dark:text-gray-400">
        {info}
      </p>
      <div className="flex h-auto flex-col justify-center overflow-auto py-3.5">
        <ul
          role="list"
          className="flex flex-row gap-x-4 gap-y-4 md:auto-cols-min"
        >
          {accommodations.map((e, index) => (
            <li key={index} className="flex justify-center">
              <AccommodationCard
                key={index}
                card={e}
                distanceTitle={distanceTitle}
                websiteTitle={websiteTitle}
                mapsTitle={mapsTitle}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AccommodationCard = ({
  card,
  distanceTitle,
  mapsTitle,
  websiteTitle,
}: {
  card: CardProps;
  distanceTitle: string;
  mapsTitle: string;
  websiteTitle: string;
}) => {
  return (
    <div className="min-h-90 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div>
        <Image
          className="rounded-t-lg"
          src={card.src}
          alt={card.website}
          width={267}
          height={200}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col justify-between p-5">
        <div className="min-h-20">
          <h5 className="mb-2 text-center font-sans text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
        </div>
        <span className="text-center font-sans text-gray-700 dark:text-gray-400">
          {distanceTitle} {card.distance}
        </span>
        <div className="mt-4 flex justify-center md:mt-6">
          <a
            href={card.website}
            className="flex-1 items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-center font-sans text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            {websiteTitle}
          </a>
          <a
            href={card.maps}
            className="ms-2 flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-center font-sans text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            {mapsTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
