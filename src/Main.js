import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './Gallery';

class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <Gallery />  
            </main>
        );
    }
}

export default Main;
