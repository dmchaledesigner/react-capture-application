import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'


const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Dolore aliquyam amet et labore.</p>
                    </div>


                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>TeamWork</h3>
                        </div>
                        <p>Dolore aliquyam amet et labore.</p>
                    </div>


                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Dolore aliquyam amet et labore.</p>
                    </div>


                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Dolore aliquyam amet et labore.</p>
                    </div>
                </div>
            </div>

            <div className="image">
                <img src={home2} alt="home2" />
            </div>
        </div>
    )
}

export default ServicesSection
