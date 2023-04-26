import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import Beer from './Beer';

function App() {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("https://api.punkapi.com/v2/beers");
        setBeerData(response.data);
      } catch (error) {
        console.error("Error fetching beer data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {beerData.map((item, index) => (
          <Beer
            key={index}
            image={item.image_url}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;