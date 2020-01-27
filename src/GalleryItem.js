
import React from 'react';

class GalleryItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li className="photosList__item" onClick={this.props.onClick()}>
                <img className="photo" src={this.props.value} data_id={this.props.id}></img>
            </li>
        );
    }
}

export default GalleryItem;
