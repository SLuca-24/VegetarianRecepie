import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from  './page/header';
import SignatureSection from  './page/signature-recepies';
import reportWebVitals from './reportWebVitals';
import TypeOfRecepies from "./page/type-of-recepies"
import AppLunch from "./page/app-lunch"
import Contact from "./page/contact"
import AppBreakfast from './page/app-breackfast';
import AppDinner from './page/app-dinner'
import HowItWorks from './page/how-it-work'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HowItWorks />
    <SignatureSection />
    <TypeOfRecepies />
    <AppBreakfast />
    <AppLunch />
    <AppDinner />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
