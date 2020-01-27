
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="header">
                    <h1 className="header__title">TEST APP</h1>
                </header>

                <Main />

                <footer className="footer">
                    <div className="footer__text">&copy; 2019-2020</div>
                </footer>
            </div>
        );
    }
}

export default App;
