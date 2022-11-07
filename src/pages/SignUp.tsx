import signup from '../assets/signup.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FormEvent, useContext } from 'react';
import { AuthContext, IAuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
    const { signUp, updateUser, setLoading } = useContext(
        AuthContext
    ) as IAuthContext;

    const navigate = useNavigate();
    const location = useLocation();
    const to = location.state?.from?.pathname || '/';

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        const resetForm = e.target as HTMLFormElement;

        const form = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            image: { value: string };
            password: { value: string };
        };

        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        signUp(email, password)
            .then((result) => {
                const user = result.user;
                updateUser(name, image)?.then(() => {
                    console.log('User Updated');
                });

                console.log(user);
                resetForm.reset();
                navigate(to, { replace: true });
            })
            .catch((err) => console.error(err))
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-between gap-5 mx-10 md:flex-row">
                <div className="w-full">
                    <img className="w-full" src={signup} alt="" />
                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-bold text-center text-cyan-600">
                        Sign Up
                    </h1>
                    <div className="mb-10" />
                    <div className="mx-10">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 p-5 font-semibold text-gray-700 rounded-lg shadow-md bg-gray-200/70"
                        >
                            <div>
                                <label htmlFor="name">Name:</label>
                                <div className="mb-1" />
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full px-5 py-2 rounded-md shadow-sm outline-2 outline-cyan-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <div className="mb-1" />
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full px-5 py-2 rounded-md shadow-sm outline-2 outline-cyan-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="image">Photo URL:</label>
                                <div className="mb-1" />
                                <input
                                    id="image"
                                    type="text"
                                    name="image"
                                    placeholder="Photo URL"
                                    className="w-full px-5 py-2 rounded-md shadow-sm outline-2 outline-cyan-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <div className="mb-1" />
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full px-5 py-2 rounded-md shadow-sm outline-2 outline-cyan-600"
                                    required
                                />
                            </div>
                            <p>
                                Already have an Account?{' '}
                                <Link className="text-cyan-600" to={`/signin`}>
                                    Sign In.
                                </Link>
                            </p>
                            <button
                                className="px-5 py-2 text-white rounded-md shadow-sm bg-cyan-600 shadow-cyan-600"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
