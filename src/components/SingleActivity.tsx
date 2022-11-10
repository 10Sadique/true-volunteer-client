import { FC, useEffect, useState } from 'react';
import { IActivity } from '../pages/Activities';
import { IEvent } from './Events';

type ISingleActivity = {
    event: IActivity;
    handleRemove: (id: any) => void;
};

const SingleActivity: FC<ISingleActivity> = ({ event, handleRemove }) => {
    const [activity, setActivity] = useState<IEvent | null>(null);
    const { eventId, date, _id } = event;

    useEffect(() => {
        fetch(`https://true-volunteer-server.vercel.app/events/${eventId}`)
            .then((res) => res.json())
            .then((data) => {
                setActivity(data);
            });
    }, [eventId]);

    // console.log(activity);

    return (
        <div className="bg-gray-200/70 p-3 rounded-lg shadow-md font-semibold text-gray-700">
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg overflow-hidden shadow-sm">
                    <img
                        className="h-full w-full object-cover scale-110"
                        src={activity?.img}
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <h2 className="font-bold">{activity?.title}</h2>
                    <p className="flex-1">{date}</p>
                    <div className="self-end">
                        <button
                            onClick={() => handleRemove(_id)}
                            className="bg-red-600 text-white py-1 px-3 w-full text-sm rounded-md shadow-sm shadow-red-600"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleActivity;
