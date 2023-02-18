import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
const Landing = () => {
  return (
    <div>
        <nav>
         <div class="menu">
             <p class="website_name">LOGO</p>
             {/* <img src={imged} className="website_name"/> */}
             <div class="menu_links">
                 <a href="" class="link">about</a>
                 
             </div>
             <div class="menu_icon">
                 <span class="icon"></span>
             </div>
         </div>
     </nav>
     <section class="wrapper">
 
         <div class="container">
 
             <div id="scene" class="scene" data-hover-only="false">
 
 
                 <div class="circle" data-depth="1.2"></div>
 
                 <div class="one" data-depth="0.9">
                     <div class="content">
                         <span class="piece"></span>
                         <span class="piece"></span>
                         <span class="piece"></span>
                     </div>
                 </div>
 
                 <div class="two" data-depth="0.60">
                     <div class="content">
                         <span class="piece"></span>
                         <span class="piece"></span>
                         <span class="piece"></span>
                     </div>
                 </div>
 
                 <div class="three" data-depth="0.40">
                     <div class="content">
                         <span class="piece"></span>
                         <span class="piece"></span>
                         <span class="piece"></span>
                     </div>
                 </div>
                 {/* <!-- <img src="./logo.gif" class="p404" data-depth="0.50"> */}
                 {/* <img src={imged} alt="logo" className="p404" data-depth="0.50" />
                 <img src={imged} className="p404" data-depth="0.10"/> */}
                 <p class="p404" data-depth="0.50">Anubhuti</p>
                 <p class="p404" data-depth="0.10">Anubhuti</p>
 
             </div>
 
             <div class="text">
                 <article>
                     <p>are you depressed?</p>
                     <NavLink to={"/home"} id="nav"><h1>Let's Start the Journey</h1></NavLink>
                 </article>
             </div>
 
         </div>
     </section>
    </div>
  )
}

export default Landing