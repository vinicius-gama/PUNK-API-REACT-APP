import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Beer from './Beer';


const data = await axios("https://api.punkapi.com/v2/beers")
  .then(res => res.data);

function App() {

  const [beerData, setLike] = useState({ data: data });
  console.log(data)

  return (
    <>
      <div>
        {beerData.data.map((item, index) =>
          <Beer key={index} image={item.image_url} name={item.name} description={item.description} />
        )}
      </div>
    </>
  )
}

export default App
