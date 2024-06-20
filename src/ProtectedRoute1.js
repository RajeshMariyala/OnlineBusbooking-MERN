import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute1 = (props) => {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {

        const userToken = sessionStorage.getItem('user-token1');

        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/adminLogin?returnUrl=' + props.returnUrl);

        }
        setIsLoggedIn(true);
    }

    useEffect(() => {

        checkUserToken();
    }, [isLoggedIn]);

    return (
        <>
            {
                isLoggedIn ? props.children : null
            }
        </>
    );
}

export default ProtectedRoute1;