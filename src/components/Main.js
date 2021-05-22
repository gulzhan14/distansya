import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './About/About'
import Header from './Header/Header'
import Page from './Page/Page';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import Page4 from './Page4/Page4';
import Page5 from './Page5/Page5';
import Page6 from './Page6/Page6';
import Page7 from './Page7/Page7';

export default function Main() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/RUB" component={About}/>
                    <Route exact path="/CAD" component={Page}/>
                    <Route exact path="/HRK" component={Page2} />
                    <Route exact path="/JPY" component={Page3}/>
                    <Route exact path="/NOK" component={Page4}/>
                    <Route exact path="/ZAR" component={Page5}/>
                    <Route exact path="/RON" component={Page6}/>
                    <Route exact path="/USD" component={Page7}/>

                </Switch>
            </BrowserRouter>
        </div>
    )
}
