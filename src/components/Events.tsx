import { useState, useEffect } from 'react';
import EventCard from './EventCard';

export interface IEvent {
    _id: string;
    event_id: string;
    title: string;
    img: string;
}

const Events = () => {
    const [events, setEvents] = useState<IEvent[] | null>(null);

    useEffect(() => {
        fetch(`http://localhost:5000/events`)
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
            });
    }, []);

    // console.log(events);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-cyan-600">
                Our Volunteering Events
            </h1>
            <div className="grid grid-cols-1 gap-5 mt-14 md:grid-cols-3 lg:grid-cols-4">
                {events?.map((event) => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default Events;
