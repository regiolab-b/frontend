import React, {useEffect, useState} from 'react'
import '../App.css';


export const AntiSwipeTutorial = () => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (window.localStorage.getItem('dismissed_anti_swipe_tutorial')) {
            setVisible(false)
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function submitHandler() {
        setVisible(false)
        window.localStorage.setItem('dismissed_anti_swipe_tutorial', 'true')
    }
    
    if (visible === true) {
        return (
        <div class="card-tutorial">
            <div class="container text-center">
                <img src="https://image.flaticon.com/icons/png/512/55/55421.png" alt="hand swiping" class="image mt-2"/>
            </div>
            <div class="text-center">
                <div class="text-tutorial pt-2">
                    <p>Swipe een artikel weg <br></br>
                      om je actie ongedaan te maken
                    </p>
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
