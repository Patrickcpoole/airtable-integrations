const apiKey = 'keyBupI08coJkltKa'; 

const Airtable = () => {
fetch('https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests', {
headers: {
    Authorization: `Bearer ${apiKey}`
  }
}).then(response => {
    return response.json()}) 
    .then(records => {
        return(records)
    });
    }
 


export default Airtable;