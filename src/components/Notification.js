import React, {useEffect, useState} from "react";
import {getToken} from "../database/firebase";

export const Notifications = (props) => {
    const [isTokenFound, setTokenFound] = useState(false);
    console.log("Token found", isTokenFound);
    useEffect(() => {
        let data;
        async function tokenFunc() {
            data = await getToken(setTokenFound);
            if (data) {
                console.log("Token is", data);
            }
            return data;
        }
        tokenFunc().then(r => console.log('Token: ' + r));
    }, [setTokenFound]);
    return <></>;
};