import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCountries } from "../../services/resortService";
import styles from "../Resort/ResortCreate.module.css";

function ResortCreate({
    onResortCreateSubmit,
}) {

    const navigate = useNavigate();
    const [state, setState] = useState({ data: [], isLoading: false });

    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getCountries().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    const onBackButtonClick = () => {
        navigate('/resorts');
    };

    const [formValues, setFormValues] = useState({
        name: '',
        elevation: '',
        description: '',
        imageUrl: '',
        numberOfSlopes: 0,
        skiAreaSize: 0,
        countryId: '',
    });

    const [formErrors, setFormErros] = useState({
        name: '',
        elevation: '',
        description: '',
        imageUrl: '',
        numberOfSlopes: '',
        skiAreaSize: '',
        countryId: '',
    });

    const formChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const formValidate = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'name' && (value.length < 2 || value.length > 50)) {
            errors.name = 'Resort name should be between 2 and 50 characters';
        }

        if (e.target.name === 'elevation' && (value.length < 2 || value.length > 4)) {
            errors.elevation = 'Elevation should be between 2 and 4 characters';
        }

        if (e.target.name === 'description' && (value.length < 20 || value.length > 150)) {
            errors.description = 'Description should be between 20 and 150 characters';
        }

        if (e.target.name === 'imageUrl' && (value.length < 10 || value.length > 100)) {
            errors.imageUrl = 'Image URL should be between 10 and 100 characters';
        }

        if (e.target.name === 'numberOfSlopes' && (value < 0 || value > 1000)) {
            errors.numberOfSlopes = 'Number of slopes should be between 0 and 1000';
        }

        if (e.target.name === 'skiAreaSize' && (value < 0 || value > 1000)) {
            errors.skiAreaSize = 'Ski Area Size should be between 0 and 1000';
        }

        setFormErros(errors);
    };

    return (
        <div className={styles['content']}>
            <div className={styles['header']}>
                <h5 className={`${styles['title']} modal-title`}>Create Resort</h5>
            </div>
            <div className={`${styles['body']} modal-body`}>
                <form className={`${styles['form']}`} onSubmit={(e) => onResortCreateSubmit(e)}>
                    <div className={`${styles['input-element']} mb-3`}>
                        <label className={`${styles['label']} form-label`} htmlFor="name">Name</label>
                        <input className={`${styles['input']} form-control`}
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
                        <input className={`${styles['input']} form-control`}
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
                        <input className={`${styles['input']} form-control`}
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
                        <input className={`${styles['input']} form-control`}
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
                        <input className={`${styles['input']} form-control`}
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
                    <div>
                        <button type="submit" className={`${styles['create-button']} btn btn-primary`}>Create</button>
                        <button onClick={onBackButtonClick} className={`${styles['back-button']} btn btn-primary`}>Back</button>
                    </div>
                </form>
            </div >
        </div>
    );
}

export default ResortCreate;