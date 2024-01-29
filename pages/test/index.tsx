import type { NextPage } from "next";

import EventsCarousel from "components/Evenements/Carousel";
import Title from "components/Misc/Title";

const EventPage: NextPage = () => {
  return (
    <>
      <Title content="Évènements | BDE CESI Rouen" />
      <div className="flex-grow flex w-52 justify-center mx-auto mt-10">
        <EventsCarousel />
      </div>
    </>
  );
};

export default EventPage;
