import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Survey from './scripts/pages/Survey';
import Frontpage from './scripts/pages/Frontpage';
import pageTexts from './scripts/const/PageText';
import './styles/base.css';
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/survey" component={Survey} />
                        <Route exact path="/end" component={endPageLoader} />
                        <Route path ="/" component={frontPageLoader} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const frontPageLoader = () => (
    <Frontpage to={"/survey"}
               textClassName={"frontPageSpan"}
               text={pageTexts['front'].text}
               buttonClassName={"btn btn-primary btn-front"}
               buttonText={pageTexts['front'].button}/>
);

const endPageLoader = () => (
    <Frontpage to={"/survey"}
               textClassName={"endPageSpan"}
               text={pageTexts['end'].text}
               buttonClassName={"btn btn-primary"}
               buttonText={pageTexts['end'].button}/>
);

export default App;
