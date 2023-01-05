import { useState, useEffect, useContext } from "react";
import EventList from "../components/Events/EventList";
import Navigation from "../components/Layout/Navigation";
import Footer from "../components/Layout/Footer";
import { EventContext } from "../context/EventsContextProvider";

export default function AllEvents() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedEvents, setLoadedEvents] = useState([]);

  const eventCtx = useContext(EventContext);
  const isLoading = eventCtx.isLoading;

  useEffect(() => {
    eventCtx.getAllEvents();
  }, []);

  const allEvents = eventCtx.allEvents;

  if (!allEvents) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <>
      <Navigation />
      <section>
        <EventList events={allEvents} />
      </section>
      <Footer />
    </>
  );
}
