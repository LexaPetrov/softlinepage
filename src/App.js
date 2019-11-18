import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import Partners from "./components/Partners/Partners";
import Ideas from "./components/Ideas/Ideas";
import Footer from "./components/Footer/Footer";



const App = () => {
    return (
        <div className="content">
            <Header/>
            <Quiz/>
            <Ideas />
            <Partners />
            <Footer />
        </div>
    );
}

export default App;
