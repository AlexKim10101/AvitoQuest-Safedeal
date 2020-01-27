
import React from 'react';

import Comments from './Comments';
import AddCommentForm from './AddCommentForm';
import CloseBtn from './CloseBtn';
import {ADRESS} from './GlobalValues';



class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            src: '',
            isLoading: false,
        }
    }

    componentDidMount = () => {
      
        const xhr = new XMLHttpRequest();
        xhr.open('GET', ADRESS+'/'+this.props.idModal, true); 
        xhr.send();
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false;
            }

            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                let data = JSON.parse(xhr.responseText);
                this.setState({
                    src: data.url,
                    comments: data.comments,
                    isLoading: false,    
                })
            }
        }
    }
    render() {

        return(
            <div className="modal visible"> 
                <div className="content-wrapper">
                    <div className="content">
                        <div className="image-wrapper">
                            <img className="image" id="mod-Image" src={this.state.src} alt=''></img>
                        </div>

                        <Comments list={this.state.comments}/>

                        <AddCommentForm imageId={this.props.idModal}/>
                       
                    </div>
                    <CloseBtn closeBtnModal={()=>this.props.closeBtnModal()} />
                </div>
            </div>

            )    
    }
}

export default Modal;
