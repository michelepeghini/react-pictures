import React from 'react';


class ImageTile extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();

        this.state = {
            image: props.image,
            openModal: props.openModal,
            spans: 0
        }
    }

    handleModal = (event) => {;
        this.state.openModal(this.state.image);
    }
    
    setGridSpans = () => {
        const spanHeight = 10,
            height = this.imageRef.current.clientHeight,
            heightAsSpans = height /spanHeight,
            spans = Math.ceil(heightAsSpans),
            footerOffset = Math.abs(heightAsSpans - spans) * spanHeight;
            console.log(footerOffset);
        this.setState({
            spans: spans,
            footerOffset: footerOffset
        });
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setGridSpans);
    }

    render() {
        const {alt_description, urls, description} = this.state.image;
        
        const header = (alt_description !== null && alt_description.length !== 0)
            ? <h3>{alt_description}</h3>
            : null;
        
        const footer = (description !== null && description.length !== 0)
            ? <p style={{bottom: `${this.state.footerOffset}px`}}>{description}</p>
            : null;
        
        return (
            <div className="image-tile" style={{gridRowEnd: `span ${this.state.spans}`}}>
                {header}
                <img ref={this.imageRef} src={urls.regular} alt={alt_description} onClick={this.handleModal}/>
                {footer}
            </div>
        );
    }
    
};

export default ImageTile;