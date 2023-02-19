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
import sound from "./omsound.mp3"

import { useSpeechSynthesis } from 'react-speech-kit';
const Grounding = (props) => {

    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();
    
    return (
      
        <>
          <Header/>

    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Speak</button>
    </div>


        </>
    )
}

export default Grounding;