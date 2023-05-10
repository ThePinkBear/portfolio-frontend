import { useState } from "react";

const Login = () => {
  const [fetchedData, serFetcedData] = useState([{
    date:""
  }]);
    const [token, setToken] = useState({
        access_token: '',
        scope: '',
        expires_in: 0,
        token_type: '',
      });
    async function getToken() {
        const tokenRequestConfig = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            client_id: 'rNgi0WAJDX7u5RWIRiq56DNyjOUz89iA',
            client_secret: 'BTCZWopQu2udX0M-mZQJ8i1Z1WUuzX3nD3CcnhaDmRcATl1hsWvMdVcyKNvxo0nW',
            audience: 'http://localhost:5196/google/Auth/',
            grant_type: 'client_credentials'
          })
        };
      
        try {
          const response = await fetch('https://dev-7ekffe016ic0nj4q.us.auth0.com/oauth/token', tokenRequestConfig);
          const data = await response.json();
          setToken(data);
        } catch (error) {
          console.error(error);
        }
      }
  
      const getWeather = async() => {
        try 
        {
          const response = await fetch('http://localhost:5196/WeatherForecast',{
            method: 'GET',
            headers: {
              "Authorization": `Bearer ${token.access_token}`,
            },
          });
          if (response.status === 200) {
            const data = await response.json();
                console.log("ja det här gick ju bra")
                console.log(data)
            serFetcedData(data);
        
          }
        } 
        catch (error) {
          console.error(error);
        }
      }
      
    return(<>
    
        <button onClick={ getToken}>Log in : GetToken</button>
        <button onClick={getWeather}>Get Weather</button>
        <button onClick={()=> console.log(token.access_token)}>See token</button>
    {fetchedData.map((p, index )=> ( 
      <div key={index}> {p.date}</div>
    ))}
    </>)
}
export default Login