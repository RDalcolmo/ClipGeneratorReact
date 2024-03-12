import { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import { initiateAccount } from "../Utils/UserControllerCalls";

function Command()
{
    const [isVisible, setIsVisible] = useState(false);
    const authorizationCode = new URLSearchParams(location.search).get('code') as string;
    const channelName = new URLSearchParams(location.search).get('state') as string;
    const { data } = useQuery(['code', authorizationCode], () => initiateAccount(authorizationCode, channelName));
    
    if (!authorizationCode)
    {
        return null;
    }
    
    useEffect(() => {
        if (data)
        {
            setIsVisible(true);
        }
    }, [data]);
   
    return (
        <div className="container" style={{display: isVisible ? "block" : "none"}}>
            <div>
                <p>
                    Here is your command:
                </p>
            </div>
            <div>
                <p>
                    $(urlfetch https://api.twitchclipgenerator.com/clips?apiKey={data})
                </p>
            </div>
        </div>
    );
}

export default Command;