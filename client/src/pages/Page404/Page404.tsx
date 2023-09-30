// Importing necessary modules and components
import { Page } from "../../components";
import "./Page404.scss";
import { Link } from "react-router-dom";

// Defining the Page404 component as a functional component
const Page404 = () => {
    return (
        <Page>
            <div className="Page404">
                {/* Displaying an image */}
                <img
                    src="https://media.tenor.com/VyugKLEBolsAAAAC/bocchi-bocchi-the-rock.gif"
                    alt="Bocchi No"
                    width="100"
                    height="100"
                />
                <h1>404: Page not found</h1>
                {/* Link to the homepage with a message */}
                <Link to="/">
                    <h1>Go back to homepage</h1>
                </Link>
            </div>
        </Page>
    );
}

// Exporting the Page404 component as default
export default Page404;