import React from 'react';


function formatDate(dateText){
    let date = new Date(dateText);
    let day = date.getDate() > 9 ? date.getDate() : '0'+date.getDate();
    return day+'.'+date.getMonth()+1+'.'+date.getFullYear();
}

class CommentsListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let date = formatDate(this.props.data.date);
        let text = this.props.data.text;
        return (
            <li className="comment">
                <div className="comment__date">{date}</div>
                <div className="comment__text">{text}</div>
            </li>
        );
    }

}

export default CommentsListItem;
