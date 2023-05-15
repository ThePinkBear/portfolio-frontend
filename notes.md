
# notes

## Code snippets to save

```javaScript
// From PinkBear page
const [authenticated, setAuthenticated] = useState<string>('');


fetch(`https://${API_URL}/api/portfoliobackend/private`, options)
       .then(response => response.text())
      .then(data => setAuthenticated(data as string));

//Fomr about page
const [authenticated, setAuthenticated] = useState<string>('');

//From App

const getToken = async () => {
    const tokenRequestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: `${import.meta.env.VITE_API_CLIENT_ID}`,
        client_secret: `${import.meta.env.VITE_API_CLIENT_SECRET}`,
        audience: `${import.meta.env.VITE_API_AUTH0_AUDIENCE}`,
        grant_type: 'client_credentials'
      }),
    };
    
    try {
      fetch('https://dev-cvwatk46okr8v6q2.uk.auth0.com/oauth/token', tokenRequestConfig)
      .then(response => response.json())
      .then(data => setToken(data));
      
    } catch (error) {
      console.error(error);
    }
  }

  // From useeffect in app
  // if(!tokenAvailable())
    // {
    //   getToken();
    // }

```
