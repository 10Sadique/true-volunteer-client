import hero from '../assets/hero.png';

const Hero = () => {
    return (
        <div>
            <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row">
                <div className="md:basis-3/5">
                    <h1 className="text-3xl font-extrabold text-gray-700 md:text-6xl">
                        Your Voice Can Change The World. Let's Do It Together.
                    </h1>
                    <div className="mb-5" />
                    <p className="text-gray-500">
                        Join our team and make our country a better place to
                        live.
                    </p>
                    <div className="mb-8" />
                    <button className="px-5 py-2 text-white rounded-lg shadow-md bg-cyan-600 shadow-cyan-600 ">
                        Join as a Volunteer
                    </button>
                </div>
                <div className="flex items-center justify-center w-full overflow-hidden md:basis-2/5">
                    <img className="rounded-full md:w-4/5" src={hero} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
