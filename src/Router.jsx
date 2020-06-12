import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';
import Alternance from './components/alternance/Alternance';
import About from './components/about/About';
import HandiPaca from './components/portfolio/HandiPaca';
import Wavager from './components/portfolio/Wavager';
import Surveys from "./components/portfolio/Surveys";
import Avocat from './components/portfolio/Avocat';
import Legal from './components/layout/Legal';
const Router = () => {
    return (
        <Switch>
            <Route  exact path='/' component={Portfolio}/>
            <Route  exact path='/alternance' component={Alternance} />
            <Route exact path="/about" component={About} />
            <Route exact path="/handipaca" component={HandiPaca}/>
            <Route exact path="/wavager" component={Wavager}/>
            <Route exact path="/surveys" component={Surveys}/>
            <Route exact path="/avocat" component={Avocat}/>
            <Route exact path="/legal" component={Legal}/>
        </Switch>
    )
}

export default Router; 