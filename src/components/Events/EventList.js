import "./EventList.css";
import EventItem from "./EventItem";
import { Link } from "react-router-dom";

export default function EventList(props) {
  const noEventMessage = (
    <div className="message__container">
      <span>Sorry you haven't created any events yet. 😞</span>
      <Link to="/add-event" className="message_link">
        Create an event here.
      </Link>
    </div>
  );

  const eventCount = props.events.length;

  return (
    <ul className="list grid">
      {eventCount === 0 && noEventMessage}
      {eventCount > 0 &&
        props.events.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            price={event.price}
            city={event.city}
            date={event.date}
            startTime={event.startTime}
            endTime={event.endTime}
            category={event.category}
            seats={event.seats}
            team={event.team}
            image={event.image}
          />
        ))}
    </ul>
  );
}