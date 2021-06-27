import React from 'react';

import { Route, Switch } from "react-router-dom";



//global styles
import GlobalStyle from './components/GlobalStyle';




//import Navigation
import Navigation from './components/Navigation'


// import pages
import AboutUsPage from './Pages/AboutUsPage';
import OurWorkPage from './Pages/OurWorkPage';
import ContactUspage from './Pages/ContactUsPage';



function App() {
  return (
    <div className="App">
      <GlobalStyle />



      <Navigation />

      <Switch>
        <Route exact path="/" component={AboutUsPage}></Route>
        <Route path="/work" component={OurWorkPage}></Route>
        <Route path="/contact" component={ContactUspage}></Route>
      </Switch>


    </div>
  );
}

export default App;
