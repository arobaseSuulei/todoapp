import { useState } from 'react'

import viteLogo from '/vite.svg'

import Home from "./home.jsx";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";


export default function App() {
    return(
        <div style={{backgroundColor:'#121212'}} className={'text-white min-h-screen p-12'} >

            <Navbar/>
            <Section/>


        </div>
    );
}
