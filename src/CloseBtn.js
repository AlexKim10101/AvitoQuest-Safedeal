import React from 'react';

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
