
import React from 'react';
import ReactDOM from 'react-dom';

import CommentsListItem from './CommentsListItem';


class Comments extends React.Component {
    constructor(props){
        super(props);
    }
    renderCommentsListItems(){
        
        let list = null;
        if(this.props.list){
            list = this.props.list.map(function(item){
                return <CommentsListItem data={item} key={item.id}/>
            })
        }
    return list;
        

    }
    render() {
        return (
            <div className="comments-wrapper">
                <ul className="comments" id="comments">
                    {this.renderCommentsListItems()}
                </ul>
            </div>
        );
    }
}

export default Comments;
