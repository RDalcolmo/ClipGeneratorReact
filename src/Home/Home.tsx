import React, { useState } from "react";
import './Home.css'

function Home()
{
    const [channelName, setChannelName] = useState('');
    
    function onClick()
    {
        if (!channelName)
        {
            alert("Enter a channel name");
            return;
        }

        window.location.href = "https://id.twitch.tv/oauth2/authorize" +
                                "?client_id=" + encodeURIComponent("4qn897qcu5idrecjs143gi62s25ybg") +
                                "&redirect_uri=" + encodeURIComponent("https://twitchclipgenerator.com/command") +
                                "&response_type=" + encodeURIComponent("token") +
                                "&scope="         + encodeURIComponent("clips:edit") +
                                "&force_verify="  + encodeURIComponent("true") +
                                "&state=" + encodeURIComponent(channelName);
    }

    return (
        <div className="container">
        <h3>Made by SkyeRaf (Twitter/Twitch)</h3>
            <div>
                <input type="text" placeholder="Channel to clip" value={channelName} onChange={(e) => setChannelName(e.target.value)}/>
                <button className="login-button" onClick={onClick}>Generate Command!</button>
            </div>
        </div>
    );
}

export default Home;