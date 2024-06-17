import { useState } from "react";

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
            "&response_type=" + encodeURIComponent("code") +
            "&scope="         + encodeURIComponent("clips:edit") +
            "&force_verify="  + encodeURIComponent("true") +
            "&state=" + encodeURIComponent(channelName);
    }

    return (
        <>
        <div className="container">
            <div>
                <h3>Generate a Clipping Command</h3>
            </div>
            <div>
                <div className="row row-cols-lg-auto g-3">
                    <div>
                        <input type="text" className="form-control" placeholder="Twitch Channel Name" value={channelName} onChange={(e) => setChannelName(e.target.value)}/>
                    </div>
                    <div>
                        <button className="btn btn-dark" onClick={onClick}>Generate Command!</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container" style={{paddingTop: "5vh"}}>
        <div>
            <h5>Why use a clipping command?</h5>
            <li>A clipping command uses the Twitch API which directly requests for a clip to be generated.</li>
            <li>It is faster and more responsive than interacting with the UI which can take time loading all the resources required to make a clip.</li>
            <li>It allows for viewers with slow connection to generate clips almost instantly.</li>
        </div>
    </div>
    </>
    );
}

export default Home;