import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="not-found">
      <h1>Sorry!</h1>
      <p>That page does not exist... key X-Files music 🛸👽</p>
      <Link to="/">Go back home before abduction! 🏠</Link>
    </main>
  );
};

export default NotFound;
