import logo from "../../logo.svg";
import { useNavigate } from "react-router-dom";

const Login = ({ text, loginSignupHandler, user, handleSignOut }) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-4 px-8">
      <div className="container rounded-lg bg-light-tertiary dark:bg-dark-tertiary px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} alt="Chroma Course" className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl font-bold font-heading leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            {text}
          </h2>
          <hr className="pt-5" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {user.isSignedIn ? (
            <button
              onClick={handleSignOut}
              className="flex w-full justify-center font-body rounded-md bg-light-primary dark:bg-dark-primary  dark:text-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => loginSignupHandler(navigate)}
              className="flex w-full justify-center font-body rounded-md bg-light-primary dark:bg-dark-primary  dark:text-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {text} with Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
