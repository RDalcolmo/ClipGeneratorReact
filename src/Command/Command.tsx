import { useState, useEffect } from "react";
import { useQuery } from 'react-query';


function Command()
{
    const [isVisible, setIsVisible] = useState(false);
    const [broadcasterId, setBroadcasterId] = useState('');
    const authorizationCode = new URLSearchParams((window.location.href).split("#")[1]).get('access_token') as string;
    const channel = new URLSearchParams(window.location.href).get('state');
    
    if (!authorizationCode)
    {
        return null;
    }
    
    async function fetchUser()
    {
        const response = await fetch(`https://api.twitch.tv/helix/users?login=${channel}`,
        {
            headers:
            {
                'Client-ID': '4qn897qcu5idrecjs143gi62s25ybg',
                'Authorization': 'Bearer ' + authorizationCode
            }
        });
        return response.json();
    }
    
    const { data, status } = useQuery(['accessToken', authorizationCode], fetchUser);
    
    useEffect(() => {
        if (data)
        {
            console.log('Twitch login', {status, data});
            setBroadcasterId(data['data'][0].id);
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
                    $(urlfetch https://api.twitchclipgenerator.com/clips?access_token={authorizationCode}&broadcaster_id={broadcasterId})
                </p>
            </div>
        </div>
    );
}

export default Command;