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
                    className="object-cover w-full h-full transition-all duration-300 scale-110 cursor-pointer hover:scale-125 ease"
                    src={img}
                    alt=""
                />
            </div>
            <div className="mb-3" />
            <div className="flex flex-col">
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-700 ">
                        {title}
                    </h2>
                </div>
                <div className="mb-2" />
                <div>
                    <Link to={`/events/${_id}`}>
                        <button className="w-full px-5 py-2 font-semibold text-white rounded-lg shadow-md bg-cyan-600 shadow-cyan-600">
                            Enroll for Event
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
