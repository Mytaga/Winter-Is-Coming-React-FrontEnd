
const HomePage = () => {
    return (
            <div id="intro-example" className="p-5 text-center bg-image">
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Winter is coming so prepare yourself....</h1>
                            <h5 className="mb-4">Get the latest info abour resorts around Europe</h5>
                            <a
                                className="btn btn-outline-light btn-lg m-2"
                                role="button"
                                rel="nofollow"
                                target="_blank">
                                Login to explore</a>
                            <a
                                className="btn btn-outline-light btn-lg m-2"
                                target="_blank"
                                role="button">
                                Don't have an acconnt ? Sign up now</a >
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default HomePage;