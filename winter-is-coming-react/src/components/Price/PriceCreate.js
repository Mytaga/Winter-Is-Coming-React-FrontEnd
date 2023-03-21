import { getResortNames } from "../../services/resortService";
import { useEffect, useState } from "react";
import styles from "../Price/PriceCreate.module.css";
import { Modal } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";

function PriceCreate({
    onPriceCreate,
    show,
    close,
}) {
    const [state, setState] = useState({ data: [], isLoading: false });

    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        getResortNames().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    const {formValues, formChangeHandler, onSubmit} = useForm({ value: 0.00, passType: '', resortId: ''}, onPriceCreate);

    const [priceFormErrors, setPriceFormErrors] = useState({
        value: '',
        passType: '',
        resortId: '',
    });

    const priceFormValidate = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'passType' && (value !== 'HalfDay' && value !== 'FullDay' && value !== 'Seasonal')) {
            errors.passType = 'Pass type must be HalfDay, FullDay or Seasonal';
        }
        if (e.target.name === 'value' && (value < 0)) {
            errors.skiAreaSize = 'Ski pass value cannot be negative';
        }

        setPriceFormErrors(errors);
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header className={styles['header']} closeButton>
                <Modal.Title className={styles['title']}>Create Price</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles['content']}>
                <div>
                    <form className={`${styles['form']}`} onSubmit={onSubmit}>
                        <div className={`${styles['input-element']} mb-3`}>
                            <label className={`${styles['label']} form-label`} htmlFor="value">Value</label>
                            <input className={`${styles['input']} form-control`}
                                id="value"
                                name="value"
                                type="text"
                                value={formValues.value}
                                onChange={formChangeHandler}
                                onBlur={priceFormValidate}
                            />
                            {priceFormErrors.value &&
                                <p className={`${styles['error']} form-error`}>
                                    {priceFormErrors.value}
                                </p>
                            }
                        </div>
                        <div className={`${styles['input-element']} mb-3`}>
                            <label className={`${styles['label']} form-label`} htmlFor="passType">Pass Type</label>
                            <input className={`${styles['input']} form-control`}
                                id="passType"
                                name="passType"
                                type="text"
                                value={formValues.passType}
                                onChange={formChangeHandler}
                                onBlur={priceFormValidate}
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
                                value={formValues.resortId}
                                onChange={formChangeHandler}
                                onBlur={priceFormValidate}
                            >
                                {state.data.map((c) => (<option key={c.id} value={c.id}>{c.name}</option>))}
                            </select>
                            {priceFormErrors.resortId &&
                                <p className={`${styles['error']} form-error`}>
                                    {priceFormErrors.resortId}
                                </p>
                            }
                        </div>
                        <div className={`${styles['buttons']} d-flex mt-3`}>
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button>
                            <button onClick={close} type="button" className="btn btn-primary">
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default PriceCreate;