import './ModalImage.css';
import React from 'react';

const ModalImage = (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal-image" onClick={props.dismiss}>
            <img className="ui centered image" alt={props.target.alt_description} src={props.target.urls.regular}/>
        </div>
    );
};

export default ModalImage;