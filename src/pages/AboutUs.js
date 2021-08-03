import React from 'react';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';


// animation and imported animations
import { motion } from 'framer-motion';
// import { PageAnimation } from '../animation';



const AboutUs = () => {
    return (
        <motion.div
        // variants={PageAnimation} initial="hidden" animate="show"
        >
            <AboutSection />
            <ServicesSection />
            <FaqSection />

        </motion.div>
    )
}

export default AboutUs
