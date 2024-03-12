import { useState } from "react";
import './Home.css'

function Home()
{
    const BASE_API_URL = import.meta.env.PROD ? "https://api.twitchclipgenerator.com" : "http://localhost:5173";
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
            "&redirect_uri=" + encodeURIComponent(`${BASE_API_URL}/command`) +
            "&response_type=" + encodeURIComponent("code") +
            "&scope="         + encodeURIComponent("clips:edit") +
            "&force_verify="  + encodeURIComponent("true") +
            "&state=" + encodeURIComponent(channelName);
    }

    return (
        <div className="container">
            <div>
                <h3>Made by SkyeRaf (Twitter/Twitch)</h3>
            </div>
            <div>
                <div className="row row-cols-lg-auto g-3">
                    <div>
                        <input type="text" className="form-control" placeholder="Channel to clip" value={channelName} onChange={(e) => setChannelName(e.target.value)}/>
                    </div>
                    <div>
                        <button className="btn btn-dark" onClick={onClick}>Generate Command!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;