import { useEffect, useState, useContext } from 'react';
import { AuthContext, IAuthContext } from '../contexts/AuthProvider';
import EventCard from './EventCard';
import Spinner from './Spinner';

export interface IEvent {
    _id: string;
    event_id: string;
    title: string;
    img: string;
}

type IEventProps = {
    limit: number;
};

const Events = ({ limit }: IEventProps): JSX.Element => {
    const [events, setEvents] = useState<IEvent[] | null>(null);
    const { loading } = useContext(AuthContext) as IAuthContext;

    useEffect(() => {
        fetch(`https://true-volunteer-server.vercel.app/events`)
            .then((res) => res.json())
            .then((data) => {
                setEvents(data.slice(0, limit));
            });
    }, [limit]);

    // console.log(events);

    if (loading) {
        return (
            <div className="flex items-center justify-center my-56">
                <Spinner />
            </div>
        );
    }

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
