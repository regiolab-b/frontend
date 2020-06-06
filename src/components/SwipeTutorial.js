import React, {useState} from 'react'
import '../App.css';

export const SwipeTutorial = () => {
    const [visible, setVisible] = useState(true)

    function submitHandler() {
        setVisible(false)
    }
    
    if (visible === true) {
        return (

        <div class="card-tutorial">
            <img src="../src/img/finger+hand+touch+touch+screen+icon-1320190780307921018.png" alt="..." class="img-thumbnail"></img>
                <div class="text-center">
                    <div class="text-tutorial">
                        <p3>Swipe een artikel weg <br></br>
                            om niet meer van dit soort <br></br>
                            artikelen te zien
                        </p3>
                    </div>
                
                    <button onClick={submitHandler} class="understood-button">Begrepen!</button>
            </div>
        </div>
    )
    }
    else {
        return (null)
    }
}
