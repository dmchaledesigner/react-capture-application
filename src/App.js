
import React from 'react';
import { Route, Switch } from 'react-router-dom';


// styles
import GlobalStyle from './styles/GlobalStyle';

//import Pages 
import Nav from "./components/Nav";
import AboutUsPage from './pages/AboutUs';
import OurWorkPage from './pages/OurWork';
import ContactUsPage from './pages/ContactUs';
import MovieDetailPage from './pages/MovieDetail'; // this is for the work/:id




// functions

function App() {



  return (
    <>
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route path="/" component={AboutUsPage} exact />
        <Route path="/work" component={OurWorkPage} exact />
        <Route path="/work/:id" component={MovieDetailPage} />
        <Route path="/contact" component={ContactUsPage} />
      </Switch>

    </>
  );
}

export default App;
