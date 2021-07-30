import React from 'react';

// styled components - global style
import GlobalStyle from '../styles/GlobalStyle';


import { motion } from 'framer-motion';


//import Navigation
import Nav from './Nav';


const Layout = (props) => {


    const items = {

    }
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <GlobalStyle />
            <Nav />
            {props.children}
        </motion.div>
    )
}

export default Layout;
