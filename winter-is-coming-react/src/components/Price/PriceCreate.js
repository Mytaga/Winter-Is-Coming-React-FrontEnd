import { getResortNames } from "../../services/resortService";
import { useEffect, useState } from "react";
import styles from "../Price/PriceCreate.module.css";

function PriceCreate({
    onClose,
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

    return (
        <div className="modal fade" id="createPrice" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className={`${styles['title']} modal-title`} id="exampleModalLabel">Create Price</h5>
                        <button type="button" onClick={onClose} className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
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
                            <button type="submit" className={`${styles['create-button']} btn btn-primary`}>Create</button>
                        </form>
                    </div >
                    <div className="modal-footer">
                        <button type="button" onClick={onClose} className="btn btn-danger" data-mdb-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceCreate;