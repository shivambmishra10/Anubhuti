import React, {useState, useEffect} from 'react';
import './Intro.css';

const Intro = ({text}) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                window.location = "/Name";
            }
        }, 3000);

        return () => clearInterval(timeout)
    }, [fadeProp])


    return (

        <div className={fadeProp.fade} style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexFlow: "column",
            minHeight: "80vh"

        }}>{text}
            <div className="step">
                “Lets Disconnect to reconnect in life,<br></br>
                coming here “
            </div>
            <br></br>
            <div className="name">
                - Anubhuti -
            </div>
        </div>
    )
}


export default Intro;