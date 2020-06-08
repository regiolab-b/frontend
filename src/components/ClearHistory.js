import React, { useState } from "react";
import { apiConfig } from '../services/globalVariables';
import { Redirect } from 'react-router-dom'
import "../App.css";

export const ClearHistory = () => {
    const [redirect, setRedirect] = useState(false);

    const clearToken = () => {
        window.localStorage.removeItem('access_token')
        apiConfig.accessToken = undefined
        setRedirect(true)
    }
    
    if (redirect) {
        return (
            <Redirect to='/'/>
        )
    }

    return (
        <div class="d-flex justify-content-center mt-5 mb-5">
            <button type="button" class="btn btn-warning" onClick={clearToken}>
                Reset profiel
            </button>
        </div>
    );
};
