import React from 'react';
import ReactDOM from 'react-dom/client';
import './page/css/index.css';
import Header from  './page/components/section1-header';
import SignatureSection from  './page/components/section3-signature';
import reportWebVitals from './reportWebVitals';
import TypeOfRecepies from "./page/components/section4-typeOfRecepie"
import Newsletter from "./page/components/section6-newsletter"
import Apps from "./page/components/section5-app"
import HowItWorks from './page/components/section2-how_it_work'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HowItWorks />
    <SignatureSection />
    <TypeOfRecepies />
    <Apps />
    <Newsletter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
