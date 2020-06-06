import React, {useState} from 'react'
import '../App.css';
import {icoon} from '../img/icoon.png'


export const SwipeTutorial = () => {
    const [visible, setVisible] = useState(true)

    function submitHandler() {
        setVisible(false)
    }
    
    if (visible === true) {
        return (
        <div class="card-tutorial">
            <div class="container text-center">
                <img src="https://image.flaticon.com/icons/png/512/55/55421.png" class="image mt-2"/>
            </div>
            <div class="text-center">
                <div class="text-tutorial pt-2">
                    <p3>Swipe een artikel weg <br></br>
                        om minder van dat soort <br></br>
                        artikelen te zien
                    </p3>
                </div>
                
                <button onClick={submitHandler} class="btn btn-outline-warning m-3">Begrepen!</button>
            </div>
        </div>
    )
    }
    else {
        return (null)
    }
}
