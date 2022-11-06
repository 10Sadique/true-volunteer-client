import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IEvent } from './Events';

type IEventCard = {
    event: IEvent;
};

const EventCard: FC<IEventCard> = ({ event }) => {
    const { _id, img, title } = event;

    return (
        <div className="p-3 bg-gray-200 border rounded-lg shadow-lg">
            <div className="overflow-hidden rounded-lg shadow-md">
                <img
                    className="object-cover w-full h-full scale-110"
                    src={img}
                    alt=""
                />
            </div>
            <div className="mb-3" />
            <div>
                <h2 className="text-xl font-bold text-gray-700">{title}</h2>
                <div className="mb-2" />
                <Link to={`/events/${_id}`}>
                    <button className="w-full px-5 py-2 text-white rounded-lg shadow-md bg-cyan-600 shadow-cyan-600">
                        Enroll for Event
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
