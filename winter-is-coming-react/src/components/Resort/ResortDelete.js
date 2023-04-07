import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

import * as resortService from '../../services/resortService';
import { useForm } from "../../hooks/useForm";

import styles from "../Resort/ResortDelete.module.css";

export const ResortDelete = ({
    show,
    close,
    onResortDelete,
}) => {

    const [state, setState] = useState({ data: [], isLoading: false });

    useEffect(() => {
        setState((state) => ({ ...state, isLoading: true }));
        resortService.getResortNames().then((data) => {
            setState((state) => ({ ...state, data, isLoading: false }));
        });
    }, []);

    const { formValues, formChangeHandler, onSubmit } = useForm({ id: '' }, onResortDelete);

    return (
        <Modal size="lg" show={show} onHide={close}>
            <Modal.Header className={styles['header']} closeButton>
                <Modal.Title className={styles['title']}>Delete Resort</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles['content']}>
                <div className={styles['body']}>
                    <form className={`${styles['form']}`} onSubmit={onSubmit} method="DELETE">
                        <div className={`${styles['input-element']} mb-3`}>
                            <label className={`${styles['label']} form-label`} htmlFor="countryId">Resorts</label>
                            <select className={`${styles['select']} form-control`}
                                id="id"
                                name="id"
                                value={formValues.id}
                                onChange={formChangeHandler}
                            >
                                {state.data.map((r) => (<option key={r.id} value={r.id}>{r.name}</option>))}
                            </select>
                        </div>
                        <div className={`${styles['buttons']} d-flex mt-3`}>
                            <button type="submit" className="btn btn-primary">
                                Delete
                            </button>
                            <button onClick={close} type="button" className="btn btn-primary">
                                Close
                            </button>
                        </div>
                    </form>
                </div >
            </Modal.Body>
        </Modal>
    );
};