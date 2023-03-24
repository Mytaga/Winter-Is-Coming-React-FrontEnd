import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="intro-example" className="p-5 text-center bg-image">
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Winter is coming so prepare yourself....</h1>
                        <h5 className="mb-4">Get the latest info about resorts around Europe</h5>
                        <Link to={"/login"} className="btn btn-outline-light btn-lg m-2">
                            Login to explore
                        </Link>
                        <Link to={"/register"} className="btn btn-outline-light btn-lg m-2">
                            Sign up now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;