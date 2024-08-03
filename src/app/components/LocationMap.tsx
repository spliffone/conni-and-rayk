import { GoogleMapsEmbed } from "@next/third-parties/google";
import SectionWrapper from "./SectionWrapper";

const MAP_LINK = "https://maps.app.goo.gl/UA2QwwYbjcWA4ZEG8";

export interface LocationMapProps {
  title: string;
  name: string;
  address: string;
  mapsPosition: string;
  openMapTitle: string;
}

export const LocationMap = ({
  title,
  name,
  address,
  mapsPosition,
  openMapTitle,
}: LocationMapProps) => {
  return (
    <div className="bg-[#EFEFEF] py-10">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="rounded-lg bg-white p-2 shadow-lg">
              <GoogleMapsEmbed
                apiKey={process.env.MAP_API_KEY!}
                height="300px"
                width="100%"
                mode="place"
                zoom="14"
                q={mapsPosition}
              />
            </div>
          </div>

          <div className="mb-6 w-full px-4 md:mb-0 md:w-1/2">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="mb-3 font-head text-3xl font-bold text-gray-700">
                {title}
              </h3>
              <h4 className="mb-4 font-sans text-xl font-semibold text-gray-700 md:text-2xl">
                {name}
              </h4>
              <p className="mb-16 font-sans md:mb-10">{address}</p>
              <div className="flex justify-center md:justify-start">
                <a
                  href={MAP_LINK}
                  target="_blank"
                  className="cursor-pointer rounded-md bg-contrast px-5 py-2 text-lg font-semibold text-white outline-4 outline-contrast-3 transition-all hover:bg-contrast-2 disabled:pointer-events-none disabled:opacity-50"
                  rel="noreferrer"
                >
                  {openMapTitle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
