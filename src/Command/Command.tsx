import { useEffect, useState } from "react";


function Command()
{
    const [isVisible, setIsVisible] = useState(false);
    const [broadcasterId, setBroadcasterId] = useState('');
    const authorizationCode = new URLSearchParams((window.location.href).split("#")[1]).get('access_token') as string;
    const channel = new URLSearchParams(window.location.href).get('state');

    useEffect(() =>
    {
        if (!authorizationCode)
        {
            return;
        }
        
        async function GetBroadcastUserId()
        { 
            const result = await fetch('https://api.twitch.tv/helix/users?login=' + channel,
                        {
                            headers:
                            {
                                'Client-ID': '4qn897qcu5idrecjs143gi62s25ybg',
                                'Authorization': 'Bearer ' + authorizationCode
                            }
                        });
            const data = await result.json();
            console.log(data);
            setBroadcasterId(data['data'][0].id);
            setIsVisible(true);
        }
        GetBroadcastUserId();
    }, []);
   
    return (
        <div style={{display: isVisible ? "block" : "none"}}>
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