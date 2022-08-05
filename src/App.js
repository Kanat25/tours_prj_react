import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour';
import Tours from './Tours'
// import "./index.json"
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour =(id) =>{
    const newTours =tours.filter((tour) => tour.id !==id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true)


    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false);
      setTours(tours)


    } catch (error) {
      setLoading(false)
      console.log(error);

    }

  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return <main>
      <Loading />
    </main>

  }

  if(tours.length===0){
    return <main className='loading'>
    <h1>
      there are no tours left1
      </h1>  
    </main>
  }

  return <main><Tours tours={tours} removeTour={removeTour}/></main>
}

export default App
