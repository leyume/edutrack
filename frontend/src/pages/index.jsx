import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="text-4xl text-red-600 text-center">
        Hello World
        <div className="text-sm">
          <Link to="/signin">Go to Sign in</Link>
        </div>
      </div>
    </>
  );
}
