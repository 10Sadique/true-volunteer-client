import { Link } from 'react-router-dom';
import Events from '../components/Events';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="mb-24" />
            <div>
                <Events limit={4} />
                <div className="mb-10" />
                <div className="flex items-center justify-center">
                    <Link to={`/events`}>
                        <button className="px-5 py-2 font-semibold text-white rounded-lg shadow-md bg-cyan-600 shadow-cyan-600">
                            See All
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
