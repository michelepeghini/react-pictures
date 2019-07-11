import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ModalImage from './ModalImage';

class ReactPictures extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pictures: [],
            modalTarget: null,
        };
    }

    onSearchSubmit =  async (searchStr) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: searchStr
            }
        });
        this.setState({ pictures: response.data.results });
    }

    setModalTarget = (targetImage) => {
        this.setState({ modalTarget: targetImage });
        console.log(targetImage);
        document.querySelector('body').style.overflow = 'hidden';
    }

    closeModal = () => {
        this.setState({ modalTarget: null });
        document.querySelector('body').style.overflow = 'auto';
    }

    render() {
        return(
            <div className="react-pictures">
                <h1>React Pictures</h1>
                <div className="container">
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                    <ImageList images={this.state.pictures} setModalTarget={this.setModalTarget}/>
                </div>
                <ModalImage show={this.state.modalTarget !== null} dismiss={this.closeModal} target={this.state.modalTarget} />            
            </div>
        );
    }
}

export default ReactPictures;