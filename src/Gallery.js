
import React from 'react';
import GalleryItem from './GalleryItem';
import Modal from './Modal';

import {ADRESS} from './GlobalValues';


class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            galleryItems: [],
            isLoading: false,
            idModal: '',
            openModal: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', ADRESS, true); 
        xhr.send();
        this.setState({ isLoading: true })
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false;
            }
            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                this.setState({
                    galleryItems: JSON.parse(xhr.responseText),
                    isLoading: false, 
                })
            }
        }
    }

    handleClick(id) {
        
        if(this.state.openModal){
            this.setState({
                idModal: '',
                openModal: false,
            })
        } else {
            this.setState({
                idModal: id.target.getAttribute('data_id'),
                openModal: true,
            })
        }

        return
    }

    renderGalleryItems = () =>{
        let list = null;
        let func = () => this.handleClick;
        list = this.state.galleryItems.map(function(item){
            return <GalleryItem value={item.url} id={item.id} onClick={func} key={item.id}/>
        })
    
        return list;
    }

    render() {
        if(this.state.openModal){
            return (
                <div className="gallery">
                    <ul className="photosList">
                       {this.renderGalleryItems()}
                    </ul>
                    <Modal idModal={this.state.idModal} closeBtnModal={()=>this.handleClick()}/>
                </div>
            );
        }

        return(
            <div className="gallery">
                <ul className="photosList">
                    {this.renderGalleryItems()}
                </ul>
            </div>
        );
    }
}

export default Gallery;
