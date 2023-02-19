import React, {useState} from 'react';
import './Name.css';
import {useHistory} from 'react-router-dom';
import logo from '../images/Anubhuti.gif';
import Footer from "./Footer";

const Name = (props) => {

    const [name, setName] = useState('');

    let history = useHistory();

    const nextPage = () => {
        history.push('/Feeling', [name])
    }

    const handleForm = (event) => {
        event.preventDefault();
        nextPage();
    }


    return (
        <div className='name'>
            <div className='nameInside'>
             
                <div className="gifWrapper">
                    <img className="gif" src={logo} alt="logo"/>
              
                </div>
                {/* <div>
                <img src={logo} alt="logo"/>
                </div> */}
                <div className='nameTitle'>
                    <h1>Anubhuti</h1>
                    <p className='nameSmallTitle'>This time shall pass!</p>
           
                </div>

                <form>
                    <label className="label">
                        Name:
                        <input className="input-name" type="text" name="username" placeholder="Your good name...."
                               required value={name} onChange={(e) => setName(e.target.value)}/><br></br>
                    </label><br></br>
                    <input className="button-confirm" type="submit" value="Confirm"
                           onClick={(event) => handleForm(event)}/>
                </form>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Name;