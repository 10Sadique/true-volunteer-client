import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext, IAuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const [navbar, setNavbar] = useState<boolean>(false);
    const { user, logOut } = useContext(AuthContext) as IAuthContext;

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('Signed Out');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const navLinks = [
        <div
            className="flex flex-col w-full gap-5 font-semibold md:items-center md:flex-row"
            key={1}
        >
            <NavLink
                className={({ isActive }) => (isActive ? 'text-cyan-600' : '')}
                to={`/home`}
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'text-cyan-600' : '')}
                to={`/events`}
            >
                Events
            </NavLink>
            {user?.uid ? (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-cyan-600' : ''
                        }
                        to={`/activities`}
                    >
                        My Activities
                    </NavLink>
                    <button onClick={handleSignOut}>Sign Out</button>
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-cyan-200">
                        {user?.photoURL && (
                            <img
                                className="w-full h-full object-cover"
                                src={user.photoURL}
                                alt=""
                            />
                        )}
                    </div>
                </>
            ) : (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-cyan-600' : ''
                        }
                        to={`/signin`}
                    >
                        Sing In
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-cyan-600' : ''
                        }
                        to={`/signup`}
                    >
                        Sign Up
                    </NavLink>
                </>
            )}
        </div>,
    ];

    return (
        <nav className="sticky top-0 z-50 w-full text-gray-700 shadow-md bg-white/70 backdrop-blur-md">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
                <div>
                    <div className="flex items-center justify-between py-3 md:block">
                        <NavLink to={`/`} className="text-3xl font-bold">
                            <span className="text-cyan-600">True</span>
                            <span className="text-gray-700">Volunteers</span>
                        </NavLink>
                        <div className="md:hidden">
                            <button
                                className="p-2rounded-md "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <FaTimes className="w-6 h-6" />
                                ) : (
                                    <FaBars className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        {navLinks}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
