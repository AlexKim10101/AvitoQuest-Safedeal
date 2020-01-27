import React from 'react';
import ReactDOM from 'react-dom';

class CloseBtn extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="close close--modal" onClick={()=>this.props.closeBtnModal()}></div>
        )
    }
}

export default CloseBtn;
