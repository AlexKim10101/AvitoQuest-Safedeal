import React from 'react';
import {ADRESS} from './GlobalValues';
import {ACCEPTEDCODE} from './GlobalValues';

class AddCommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name:'',
            comment:'',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.pushComment = this.pushComment.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    pushComment(event) {
        event.preventDefault();
     
        let name = this.state.name;
        let comment = this.state.comment;
        let message = {
            name: name,
            comment: comment
        };

        if((!name) || (!comment)){
            alert("Введите имя и комментарий");
            return;
        }
        let xhr = new XMLHttpRequest();
        xhr.open('post', ADRESS + '/' + this.props.imageId + '/comments');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(message));

        xhr.onload = function(){
            if(xhr.status == ACCEPTEDCODE){
                alert('xhr.status'+' = '+xhr.status+'. Комментарий добавлен');
                
            }
        }
        this.setState({
            name:'',
            comment:'',
        });
    }

    render(){
        return(
            <div className="form-wrapper" onSubmit={this.pushComment}>
                <form className="form" id="commentform" name="commentform">
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Ваше имя"></input>
                    <input type="text" name="comment" value={this.state.comment} onChange={this.handleInputChange} placeholder="Ваш комментарий"></input>
                    <input type="submit" value ="Оставить комментарий"></input>
                </form>
            </div>
        );
    }
}

export default AddCommentForm;
