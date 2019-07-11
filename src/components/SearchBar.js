import React from'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.search);
    }

    render() {
        return(
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="text" 
                        id="search" 
                        name="search" 
                        placeholder="Search here..." 
                        value={this.state.search}
                        onChange={e => this.setState({ search: e.target.value })}/>
                    <button id="search-button" onClick={this.onFormSubmit}>
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;