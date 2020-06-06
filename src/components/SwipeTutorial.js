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
            <div class="card text-center">
                
                    <button onClick={submitHandler} class="btn btn-info">Begrepen!</button>
            </div>
        </div>
    )
    }
    else {
        return (null)
    }
}
