import { useContext, useEffect, useState } from 'react';
import SingleActivity from '../components/SingleActivity';
import { AuthContext, IAuthContext } from '../contexts/AuthProvider';

export interface IActivity {
    _id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    eventId: string;
    isComplete: boolean;
}

const Activities = () => {
    const { user } = useContext(AuthContext) as IAuthContext;
    const [events, setEvents] = useState<IActivity[] | undefined>(undefined);
    // const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/activities?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
            });
    }, [user?.email]);

    const handleRemove = (id: any) => {
        const proceed = window.confirm(
            'Are you sure, you want to remove this event?'
        );
        if (proceed) {
            fetch(`http://localhost:5000/activities/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        // alert('Event Removed!!');
                        const remaining = events?.filter(
                            (event) => event._id !== id
                        );
                        console.log(remaining);
                        setEvents(remaining);
                    }
                });
        }
    };

    // console.log(events);

    return (
        <div>
            <h1 className="text-3xl font-bold text-cyan-600 text-center">
                Your Volunteering Activities
            </h1>
            <div className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {events?.map((event) => (
                    <SingleActivity
                        key={event._id}
                        event={event}
                        handleRemove={handleRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default Activities;
