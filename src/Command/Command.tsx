import { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import { initiateAccount } from "../Utils/UserControllerCalls";

function Command()
{
    const [isVisible, setIsVisible] = useState(false);
    const authorizationCode = new URLSearchParams(location.search).get('code') as string;
    const channelName = new URLSearchParams(location.search).get('state') as string;
    const { data } = useQuery(['code', authorizationCode], () => initiateAccount(authorizationCode, channelName));
    const [nightbotCommand, setNightbotCommand] = useState(`!addcom !clip $(urlfetch https://api.twitchclipgenerator.com/Clips?apiKey=${data})`);
    const [streamElementsCommand, setStreamElementsCommand] = useState(`!addcom !clip \${customapi.https://api.twitchclipgenerator.com/Clips?apiKey=${data}}`);
    const [fossabotCommand, setFossabotCommand] = useState(`!addcom !clip $(customapi https://api.twitchclipgenerator.com/Clips?apiKey=${data})`);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Text copied to clipboard');
                // You can add feedback here if you want
            })
            .catch((error) => {
                alert('Error copying text: ' + error);
            });
    };

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
            <div style={{paddingBottom: 10}}>
                <p>Here are your commands!</p>
                <b>Click the button for your bot below and paste it into Twitch chat:</b>
            </div>
            <div style={{paddingBottom: 5}}>
                <button className="btn btn-dark" onClick={() => copyToClipboard(nightbotCommand)}>Nightbot Command</button>
            </div>
            <div style={{paddingBottom: 5}}>
                <button className="btn btn-dark" onClick={() => copyToClipboard(streamElementsCommand)}>StreamElements Command</button>
            </div>
            <div style={{paddingBottom: 5}}>
                <button className="btn btn-dark" onClick={() => copyToClipboard(fossabotCommand)}>Fossabot Command</button>
            </div>
        </div>
    );
}

export default Command;