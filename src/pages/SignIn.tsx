import { FormEvent, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signin from '../assets/signin.svg';
import Spinner from '../components/Spinner';
import { AuthContext, IAuthContext } from '../contexts/AuthProvider';

const SignIn = () => {
    const { signIn, setLoading, loading } = useContext(
        AuthContext
    ) as IAuthContext;

    const navigate = useNavigate();
    const location = useLocation();
    const to = location.state?.from?.pathname || '/';

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        const resetForm = e.target as HTMLFormElement;

        const form = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                console.log('Signed In');
                navigate(to, { replace: true });
                resetForm.reset();
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center my-56">
                <Spinner />
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-between gap-5 mx-10 md:flex-row">
                <div className="w-full">
                    <img className="w-full" src={signin} alt="" />
                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-bold text-center text-cyan-600">
                        Sign In
                    </h1>
                    <div className="mb-10" />
                    <div className="mx-10">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 p-5 font-semibold text-gray-700 rounded-lg shadow-md bg-gray-200/70"
                        >
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
                                Don't have an Account?{' '}
                                <Link className="text-cyan-600" to={`/signup`}>
                                    Sign Up.
                                </Link>
                            </p>
                            <button
                                className="px-5 py-2 text-white rounded-md shadow-sm bg-cyan-600 shadow-cyan-600"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </form>
                        <div className="mb-5" />
                        {/* <p className="font-semibold text-center underline text-cyan-600">
                            <Link to={`/admin_signin`}>Admin Sing In?</Link>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
