import { FormEvent, useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { IEvent } from '../components/Events';
import { AuthContext, IAuthContext } from '../contexts/AuthProvider';

const EventPage = () => {
    const event = useLoaderData() as IEvent;
    const { user } = useContext(AuthContext) as IAuthContext;
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            phone: { value: string };
            date: { value: string };
        };

        const name = data.name.value;
        const email = data.email.value;
        const phone = data.phone.value;
        const date = data.date.value;

        const userData = {
            name,
            email,
            phone,
            date,
            eventId: event._id,
        };

        fetch(`http://localhost:5000/activities`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    navigate('/activities');
                }
                form.reset();
            });
    };

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
                <form
                    onSubmit={handleSubmit}
                    className="p-5 text-gray-700 rounded-lg shadow-md bg-gray-200/60 h-max basis-1/2"
                >
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
                                defaultValue={
                                    user?.displayName ? user.displayName : ''
                                }
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
                                defaultValue={user?.email ? user.email : ''}
                                readOnly
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="font-semibold ">
                                Phone No:
                            </label>
                            <input
                                id="phone"
                                type="text"
                                name="phone"
                                placeholder="Enter Phone No."
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
