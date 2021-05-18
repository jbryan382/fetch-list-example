// @ts-nocheck
import { useEffect, useState } from 'react'

export function App() {
  // Storing our Data in a useState
  const [items, setItems] = useState([])
  const [ACCESS_TOKEN, setACCESS_TOKEN] = useState('jordan');

  // Custom async function to GET a list from one-list-api.herokuapp.com
  async function handleGetFromList() {
    // Fetch to the url
    const response = await fetch(`https://one-list-api.herokuapp.com/items?access_token=${ACCESS_TOKEN}`)
    // Convert the response to JSON
    const data = await response.json()
    // Set our Item(s) to our response data
    setItems(data)
  }

  // Setting a useEffect to occur upon page load, and when the ACCESS_TOKEN is changed
  useEffect(() => {
    console.log("SOMETHING IS CHANGING")
    handleGetFromList()
    // vv Checking for ACCESS_TOKEN change vv
  }, [ACCESS_TOKEN])

  return <>
    <h1>One List:</h1>
    {/* An input to alter the ACCESS_TOKEN */}
    <input type="text" value={ACCESS_TOKEN} onChange={(event) => setACCESS_TOKEN(event.target.value)} />
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  </>
}
