import { Link } from "react-router";
import Header from "../components/Heading";

function NotFound() {
  return (
    <>
      <Header title={"Not Found"} />
      <main className="flex flex-col gap-5 min-h-[85vh] justify-center items-center">
        <p className="text-5xl font-bold text-red-400">404: Pages Not Found</p>
        <p className="text-2xl font-bold">
          Back to{" "}
          <Link to={"/"} className="underline text-blue-700 hover:text-violet-700">
            Home
          </Link>
        </p>
      </main>
    </>
  );
}

export default NotFound;
