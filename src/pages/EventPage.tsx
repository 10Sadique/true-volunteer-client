import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IEvent } from '../components/Events';

const EventPage = () => {
    const location = useLocation();
    const id = location.pathname.split('/').at(-1);
    const [event, setEvent] = useState<IEvent>();

    useEffect(() => {
        fetch(`http://localhost:5000/events/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setEvent(data);
            });
    }, [id]);

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold text-center text-cyan-600">
                    Enroll for volunteering in {event?.title}
                </h1>
            </div>
            <div className="mb-10" />
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="basis-1/2">
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img src={event?.img} alt="" />
                    </div>
                </div>
                <form className="p-5 text-gray-700 rounded-lg shadow-md bg-gray-200/60 h-max basis-1/2">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="name" className="font-semibold ">
                                Name:
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full px-5 py-2 rounded-md shadow-sm placeholder:text-gray-700"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="font-semibold ">
                                Email:
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-5 py-2 rounded-md shadow-sm placeholder:text-gray-700"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="font-semibold ">
                                Phone:
                            </label>
                            <input
                                id="phone"
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                className="w-full px-5 py-2 rounded-md shadow-sm placeholder:text-gray-700"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="date" className="font-semibold ">
                                Date:
                            </label>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                className="w-full px-5 py-2 rounded-md shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="mb-5" />
                    <div className="flex items-center justify-end">
                        <button
                            className="w-full px-5 py-2 font-semibold text-white rounded-md shadow-sm md:w-auto shadow-cyan-600 bg-cyan-700"
                            type="submit"
                        >
                            Enroll
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventPage;
