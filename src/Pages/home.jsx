import React from 'react';
import Navbar from '../components/navbar/navbar';
import Home from '../components/home-main/home-main';
import Footer from '../components/footer/footer';
import Testimonials from '../components/testimonials/testimonials';

export default function home() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Testimonials/>
        <Footer/>
    </div>
  );
}