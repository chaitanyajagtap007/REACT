import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './Car';
import reportWebVitals from './reportWebVitals';
import Nav from './Components/Nav';
import Slider from './Components/Slider';
import About from './Components/About';
import Gallery from './Components/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Car/> */}

    <Nav/>
    <Slider/>
    <About/>
    <Gallery/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
