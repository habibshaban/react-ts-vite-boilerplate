import { Link, useRouteError } from "react-router-dom";
import { useTitle } from "react-use";
import ErrorImage from "@assets/images/error/cable.png";

const ErrorPage = () => {
  useTitle(`${import.meta.env.VITE_APP_TITLE} | Page not found`);
  const error = useRouteError() as any;

  return (
    <div className="p-12 h-screen grid grid-cols-2 gap-12">
      <div className="w-full flex flec-col items-center justify-start">
        <div className="flex flex-col">
          <h1 className="my-2 text-gray-800 font-bold text-2xl">
            Looks like you've found the doorway to the great nothing
          </h1>
          <p className="my-2 text-gray-800">{error.message}</p>
          <Link
            to="/"
            className="w-[200px] my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
          >
            Take me Home!
          </Link>
        </div>
      </div>
      <div className="flex flec-col items-center justify-center">
        <img src={ErrorImage} />
      </div>
    </div>
  );
};

export default ErrorPage;
