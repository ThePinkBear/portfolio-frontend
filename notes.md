
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

```
