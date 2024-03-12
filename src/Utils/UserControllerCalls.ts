const BASE_API_URL = import.meta.env.PROD ? "https://api.twitchclipgenerator.com" : "https://localhost:44350";

export async function initiateAccount(authorizationCode: string, channelName: string)
{
    const response = await fetch(new URL(`${BASE_API_URL}/Users?code=${authorizationCode}&channelName=${channelName}`),
    {
        method: 'POST'
    });
    return response.text();
}