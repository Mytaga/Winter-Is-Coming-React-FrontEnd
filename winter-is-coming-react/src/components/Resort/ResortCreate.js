function ResortCreate({
    onClose,
    onResortCreateSubmit,
    formValues,
    formErrors,
    formChangeHandler,
    formValidate,
}) {
    return (
        <div className="overlay">
            <div className="backdrop"></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Add Resort</h2>
                        <button className="btn close" onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={(e) => onResortCreateSubmit(e)}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formValues.name}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                        style={formErrors.name ? { borderColor: "red" } : {}}
                                    />
                                </div>
                                {formErrors.name &&
                                    <p className="form-error">
                                        {formErrors.name}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="elevation">Elevation</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input
                                        id="elevation"
                                        name="elevation"
                                        type="text"
                                        value={formValues.elevation}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                        style={formErrors.elevation ? { borderColor: "red" } : {}}
                                    />
                                </div>
                                {formErrors.elevation &&
                                    <p className="form-error">
                                        {formErrors.elevation}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input
                                        id="description"
                                        name="description"
                                        type="text"
                                        value={formValues.description}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                        style={formErrors.description ? { borderColor: "red" } : {}}
                                    />
                                </div>
                                {formErrors.description &&
                                    <p className="form-error">
                                        {formErrors.description}
                                    </p>
                                }
                            </div>
                            <div className="form-group long-line">
                                <label htmlFor="imageUrl">Image Url</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                        value={formValues.imageUrl}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                        style={formErrors.imageUrl ? { borderColor: "red" } : {}}
                                    />
                                </div>
                                {formErrors.imageUrl &&
                                    <p className="form-error">
                                        {formErrors.imageUrl}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="numberOfSlopes">Number Of Slopes</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input
                                    id="numberOfSlopes"
                                    name="numberOfSlopes"
                                    type="text"
                                    value={formValues.numberOfSlopes}
                                    onChange={(e) => formChangeHandler(e)}
                                    onBlur={(e) => formValidate(e)}
                                    style={formErrors.numberOfSlopes ? { borderColor: "red" } : {}}
                                />
                            </div>
                            {formErrors.numberOfSlopes &&
                                <p className="form-error">
                                    {formErrors.numberOfSlopes}
                                </p>
                            }
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="skiAreaSize">Ski Area Size</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input
                                        id="skiAreaSize"
                                        name="skiAreaSize"
                                        type="text"
                                        value={formValues.skiAreaSize}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                        style={formErrors.skiAreaSize ? { borderColor: "red" } : {}}
                                    />
                                </div>
                                {formErrors.skiAreaSize &&
                                    <p className="form-error">
                                        {formErrors.skiAreaSize}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="countryId">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input
                                        id="countryId"
                                        name="countryId"
                                        type="text"
                                        value={formValues.countryId}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                        style={formErrors.countryId ? { borderColor: "red" } : {}}
                                    />
                                </div>
                                {formErrors.countryId &&
                                    <p className="form-error">
                                        {formErrors.countryId}
                                    </p>
                                }
                            </div>
                        </div>

                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">Save</button>
                            <button id="action-cancel" className="btn" type="button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResortCreate;