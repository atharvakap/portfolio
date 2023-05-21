import React from 'react';
import { Testimonial, Skills, Work, Header, Footer, About } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            {/* <Testimonial /> */}
            <Footer />
        </div>
    );
}

export default App;