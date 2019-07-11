import React from 'react';
import ImageTile from './ImageTile';

const ImageList  = (props) => {

    return (
        <div>
            <h2>Image List</h2>

            <div className="image-list">
                { 
                    props.images.map( image => <ImageTile key={image.id} image={image} openModal={props.setModalTarget}/> ) 
                }
            </div>
        </div>
    );
}


export default ImageList;