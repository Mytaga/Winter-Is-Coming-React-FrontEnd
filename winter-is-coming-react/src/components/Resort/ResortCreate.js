import { useState, useEffect } from "react";
import { getCountries } from "../../services/resortService";
import styles from "../Resort/ResortCreate.module.css";

function ResortCreate({
    onClose,
    onResortCreateSubmit,
    formValues,
    formErrors,
    formChangeHandler,
    formValidate,
}) {

    const [state, setState] = useState({ data: [], isLoading: false });

    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getCountries().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    return (
        <div className="backdrop">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className={`${styles['title']} modal-title`} id="exampleModalLabel">Create Resort</h5>
                            <button type="button" onClick={onClose} className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className={`${styles['body']} modal-body`}>
                            <form className={`${styles['form']}`} onSubmit={(e) => onResortCreateSubmit(e)}>
                                <div className={`${styles['input-element']} mb-3`}>
                                    <label className={`${styles['label']} form-label`} htmlFor="name">Name</label>
                                    <input className="form-control"
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formValues.name}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                    />
                                    {formErrors.name &&
                                        <p className={`${styles['error']} form-error`}>
                                            {formErrors.name}
                                        </p>
                                    }
                                </div>
                                <div className={`${styles['input-element']} mb-3`}>
                                    <label className={`${styles['label']} form-label`} htmlFor="elevation">Elevation</label>
                                    <input className="form-control"
                                        id="elevation"
                                        name="elevation"
                                        type="text"
                                        value={formValues.elevation}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                    />
                                    {formErrors.elevation &&
                                        <p className={`${styles['error']} form-error`}>
                                            {formErrors.elevation}
                                        </p>
                                    }
                                </div>
                                <div className={`${styles['input-element']} mb-3`}>
                                    <label className={`${styles['label']} form-label`} htmlFor="description">Description</label>
                                    <textarea className="form-control"
                                        id="description"
                                        name="description"
                                        type="text-area"
                                        rows="2"
                                        value={formValues.description}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                    />
                                    {formErrors.description &&
                                        <p className={`${styles['error']} form-error`}>
                                            {formErrors.description}
                                        </p>
                                    }
                                </div>
                                <div className={`${styles['input-element']} mb-3`}>
                                    <label className={`${styles['label']} form-label`} htmlFor="imageUrl">Image URL</label>
                                    <input className="form-control"
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                        value={formValues.imageUrl}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                    />
                                    {formErrors.imageUrl &&
                                        <p className={`${styles['error']} form-error`}>
                                            {formErrors.imageUrl}
                                        </p>
                                    }
                                </div>
                                <div className={`${styles['input-element']} mb-3`}>
                                    <label className={`${styles['label']} form-label`} htmlFor="numberOfSlopes">Number Of Slopes</label>
                                    <input className="form-control"
                                        id="numberOfSlopes"
                                        name="numberOfSlopes"
                                        type="text"
                                        value={formValues.numberOfSlopes}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                    />
                                    {formErrors.numberOfSlopes &&
                                        <p className={`${styles['error']} form-error`}>
                                            {formErrors.numberOfSlopes}
                                        </p>
                                    }
                                </div>
                                <div className={`${styles['input-element']} mb-3`}>
                                    <label className={`${styles['label']} form-label`} htmlFor="skiAreaSize">Ski Area Size</label>
                                    <input className="form-control"
                                        id="skiAreaSize"
                                        name="skiAreaSize"
                                        type="text"
                                        value={formValues.skiAreaSize}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                    />
                                    {formErrors.skiAreaSize &&
                                        <p className={`${styles['error']} form-error`}>
                                            {formErrors.skiAreaSize}
                                        </p>
                                    }
                                </div>
                                <div className={`${styles['input-element']} mb-3`}>
                                    <label className={`${styles['label']} form-label`} htmlFor="countryId">Country</label>
                                    <select className={`${styles['select']} form-control`}
                                        id="countryId"
                                        name="countryId"
                                        value={formValues.countryId}
                                        onChange={(e) => formChangeHandler(e)}
                                        onBlur={(e) => formValidate(e)}
                                    >
                                        {state.data.map((c) => (<option key={c.id} value={c.id}>{c.name}</option>))}
                                    </select>
                                    {formErrors.countryId &&
                                        <p className={`${styles['error']} form-error`}>
                                            {formErrors.countryId}
                                        </p>
                                    }
                                </div>
                                <button type="submit" className={`${styles['create-button']} btn btn-primary`}>Create</button>
                            </form>
                        </div >
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-mdb-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ResortCreate;