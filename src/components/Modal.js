import React, {useState} from 'react';
import {animated, useTransition} from 'react-spring';
import patrickImage from '../fh-patrick.jpg';


const Modal = ({closeModal, animation}) => {
    return (
        <div className="modal">
            <animated.div className="modal-card" style={animation}>
                <div className="left-column">
                    <div className="row-one"></div>
                    <div className="row-two"></div>
                    <div className="row-three"></div>
                </div>
                <div className="middle-column">
                    <div className="top-row">
                        <h1>Patrick Poole</h1>
                        <img className="modal-picture" src={patrickImage} />
                       
                        <button className="close-button" onClick={closeModal} >Close</button>
                        <h1>Integrations Specialist</h1>
                    </div>
                    <div className="bottom-row">
                        <h2>Slack Name: patrick</h2>
                        <h2>TimeZone: 9:22 PM local time</h2>
                        <h2>Phone Number: 303-888-8909</h2>
                        <h2>Email: Patrick </h2>
                        <h2>Office: Denver</h2>
                        <h2>Manager: Raleigh Caruso</h2>
                    </div>
                </div>
                <div className="right-column">
                    <div className="row-one"></div>
                    <div className="row-two"></div>
                    <div className="row-three"></div>
                </div>
            </animated.div>
        </div>
    )
}

const ModalWrapper = () => {
    const [on, toggle] = useState(false);
    const transition = useTransition(on, null, {
        from: { opacity: 0, transform: 'translate3d(0, -40px, 0)'},
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)'},
        leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)'}
    });
    return (
        <div>
            {transition.map(
                ({ item, key, props: animation}) => 
                item && <Modal animation={animation} closeModal={() => toggle(false)}/>
            )}
            
            <h1>Modal</h1>
            <button onClick={() => toggle(!on)} >Open </button>
        </div> 
    )
}

export default ModalWrapper;