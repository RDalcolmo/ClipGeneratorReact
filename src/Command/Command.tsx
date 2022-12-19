import { useEffect, useState } from "react";


function Command()
{
    let isVisible: boolean = false;
    const [accessToken, setAccessToken] = useState('');
    const [broadcasterId, setBroadcasterId] = useState('');

    useEffect(() =>
    {
        const authorizationCode = new URLSearchParams((window.location.href).split("#")[1]).get('access_token') as string;
        const channel = new URLSearchParams(window.location.href).get('state');

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
            setAccessToken(authorizationCode);
            setBroadcasterId(data['data'][0].id);
            isVisible = true;
        }
        GetBroadcastUserId();
    });
   
    return (
        <div>
            <div>
                <p>
                    Here is your command:
                </p>
            </div>
            <div>
                <p>
                    $(urlfetch https://api.twitchclipgenerator.com/clips?access_token={accessToken}&broadcaster_id={broadcasterId})
                </p>
            </div>
        </div>
    );
}

export default Command;