import React, {useState, useRef} from "react";
import './Grounding.css';
import Hear from '../images/hear.png';
import See from '../images/see.png';
import Touch from '../images/feel.png';
import Smell from '../images/smell.png';
import Taste from '../images/taste.png';
import Yay from '../images/yay.png';
import Header from './Header';
import {useHistory} from "react-router-dom";
import sound from "./song.mp3"
import logo from "./giphy.gif"

import { useSpeechSynthesis } from 'react-speech-kit';
const Grounding = (props) => {

    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();
    const text11 = `Hey there Shivam , how are you buddy. So home
    right.
    Isn't it one of the most amazing places. the place where we are born,
    You, Shivam, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. 
    And even though your healing journey will not be a short one, know that one day you too will be ok, 
    more than that you will be happy.
    keep listening to this healing music until you feel better
    until next time Shivam.
    take care my friend!`;

    // HOME-MOTIVATION
    const text12 = ` Hey there Shivam , how are you buddy. So family 
    right. 
    You feel like you're family is kinda disappointed in you. yeah
    that can be tough. Why do you think that? 
    Maybe your academic score isn't that great?
    Shivam Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. 
    And even though your healing journey will not be a short one, know that one day you too will be ok, 
    more than that you will be happy.
    Just believe in the universe because it has plans for you. 
    keep listening to this healing music until you feel better
    until next time Shivam.
    take care my friend!`;

    // HOME-COMFORTING
    const text13 = `Hey there Shivam , how are you buddy. So home 
    right.
    Isn't it one of the most amazing places. the place where we are born, the place where we grow up,
    the place where me make the most of our memories. Unfortunately, we do face some hard times, 
    sometimes with people who are the closest to us.
    So Shivam you're having trouble with your family? yeah 
    that can be tough but it's your family and your life. You cannot give up on them. 
    Everything will get better, but in order for that to happen, you have to believe that things will get better. 
    You need to have a strong desire for things to be ok. 
    You, Shivam, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. 
    Think about peace, 
    imagine it, 
    feel it 
    and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, 
    more than that you will be happy.
    You will once again smile with your family and forget about the hard times 
    Just believe in the universe because it has plans for you. 
    keep listening to this healing music until you feel better
    until next time Shivam.
    take care my friend!`;

    const x=()=>
    {
  
      speak({ text: text11 })

    }
    const y=()=>
    {
     
      speak({ text: text12 })
    }
    const z=()=>
    {
    
      speak({ text: text13 })
    }
    const zz=()=>
    {
      new Audio(sound).play();
    }
    return (
      
        <>
          <Header/>

    <div>
      <form>
        <br/>
        <br/>
       
        <h1>Just explore this and have a soothing experience?</h1>
        <br />
      <button className="groundButton" onClick={x}>Healing</button>
      <br />
      <button className="groundButton" onClick={y}>Motivation</button>
      <br />
      <button className="groundButton" onClick={z}>Relax</button>
      </form>
    </div>
    <br />
    <center>
    <button onClick={zz}><img className="gif" src="http://www.bkdrluhar.com/061.%20Yagna%20Graphics%20and%20Photos/10-GIF/Shivbaba-01.gif" alt="logo"/></button>
    </center>
        </>
    )
}

export default Grounding;