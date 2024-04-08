import { useState } from 'react';
import './hero.css';
function Hero(){
    // const [num, setNum] = useState(0);
    // function bringSomething(){
    //     alert('LETS GO! I AM A NINJA');
    // }


    // //with parameters
    // function handleAlertAgain(name, e){

    //     alert('My name is ' + name + e);
    //     //e are the properties
    //     console.log(e);
    // }

    // function handleChangeNum(){
    //     setNum(num + 1);
    // }

    return(
        <div className="hero-container">
            <div className='hero-sub-container'>
                <div className='hero-wrapper'>
                    <h1 className='montserrat-700' id='name-intro'>HI I'M  
                    <span className='orange-text'>JOHN FRANCIS PUEBLA</span> </h1>
                    <h1 className='montserrat-400'>Welcome to my Portfolio</h1>
                    <h1 className='montserrat-400'> An Aspiring Developer with</h1>
                    <h1 className='montserrat-700 orange-text'>SEO Experience</h1>
                    <button className='montserrat-900' id='resume-btn'>DOWNLOAD MY RESUME</button>

                </div>
            </div>
            {/* <h1>I am A HERO</h1>
            <h3>Is my favorite number { num }</h3>
            <button onClick={(e) => {
                handleChangeNum();
            }}>{ num } is my number until you click me</button> */}
        </div>
    )
}

export default Hero;