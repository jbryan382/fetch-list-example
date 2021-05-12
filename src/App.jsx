// @ts-nocheck
import { useEffect, useState } from 'react'

export function App() {
  // Storing our Data in a useState
  const [ACCESS_TOKEN, setACCESS_TOKEN] = useState('jordan');
  const [Item, setItem] = useState([]);

  // Custom async function to GET a list from one-list-api.herokuapp.com
  async function handleGetFromList() {
    // Fetch to url
    const response = await fetch(`https://one-list-api.herokuapp.com/items?access_token=${ACCESS_TOKEN}`)
    // Converting response to JSON
    const data = await response.json()
    // Setting out Item useState to our response data
    setItem(data)
  }

  // Setting a useEffect to occur upon page load, and when the ACCESS_TOKEN is changed
  useEffect(() => {
    console.log('SEE IT HAPPEN!');
    handleGetFromList()
    // vv Checking for ACCESS_TOKEN change vv
  }, [ACCESS_TOKEN]);

  return <div>
    <h1>One List:</h1>
    {/* An input to alter the ACCESS_TOKEN */}
    <input type="text" value={ACCESS_TOKEN} onChange={(event) => setACCESS_TOKEN(event.target.value)} />
    <ul>
      {/* Mapping out Item (our list of items) */}
      {Item.map((listItem, index) => {
        return (<li key={index}>{listItem.text}</li>)
      })}
    </ul>
  </div>
}
