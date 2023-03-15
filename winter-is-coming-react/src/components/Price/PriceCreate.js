import { getResortNames } from "../../services/resortService";
import { useEffect, useState } from "react";
import styles from "../Price/PriceCreate.module.css";
import { useNavigate } from "react-router-dom";

function PriceCreate({
    priceFormValidate,
    priceFormValues,
    priceFormErrors,
    onPriceCreateSubmit,
    priceFormChangeHandler
}) {
    const [state, setState] = useState({ data: [], isLoading: false });

    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getResortNames().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    const navigate = useNavigate();

    const onBackButtonClick = () => {
        navigate('/resorts');
    };

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className={`${styles['title']} modal-title`} id="exampleModalLabel">Create Price</h5>
            </div>
            <div className={`${styles['body']} modal-body`}>
                <form className={`${styles['form']}`} onSubmit={(e) => onPriceCreateSubmit(e)}>
                    <div className={`${styles['input-element']} mb-3`}>
                        <label className={`${styles['label']} form-label`} htmlFor="value">Value</label>
                        <input className="form-control"
                            id="value"
                            name="value"
                            type="text"
                            value={priceFormValues.value}
                            onChange={(e) => priceFormChangeHandler(e)}
                            onBlur={(e) => priceFormValidate(e)}
                        />
                        {priceFormErrors.value &&
                            <p className={`${styles['error']} form-error`}>
                                {priceFormErrors.value}
                            </p>
                        }
                    </div>
                    <div className={`${styles['input-element']} mb-3`}>
                        <label className={`${styles['label']} form-label`} htmlFor="passType">Pass Type</label>
                        <input className="form-control"
                            id="passType"
                            name="passType"
                            type="text"
                            value={priceFormValues.passType}
                            onChange={(e) => priceFormChangeHandler(e)}
                            onBlur={(e) => priceFormValidate(e)}
                        />
                        {priceFormErrors.passType &&
                            <p className={`${styles['error']} form-error`}>
                                {priceFormErrors.passType}
                            </p>
                        }
                    </div>
                    <div className={`${styles['input-element']} mb-3`}>
                        <label className={`${styles['label']} form-label`} htmlFor="resortId">Resort</label>
                        <select className={`${styles['select']} form-control`}
                            id="resortId"
                            name="resortId"
                            value={priceFormValues.resortId}
                            onChange={(e) => priceFormChangeHandler(e)}
                            onBlur={(e) => priceFormValidate(e)}
                        >
                            {state.data.map((c) => (<option key={c.id} value={c.id}>{c.name}</option>))}
                        </select>
                        {priceFormErrors.resortId &&
                            <p className={`${styles['error']} form-error`}>
                                {priceFormErrors.resortId}
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
};

export default PriceCreate;