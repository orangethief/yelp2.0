import { useState } from 'react'
import Restaurantlist from './components/Restaurantlist.jsx'

function App() {

  const restaurantList = [{
    name: "restaurant1",
    city: "city1",
    id: 1
  }, {
    name: "restaurant2",
    city: "city2",
    id: 2
  }];

  return (
    <>
    <Restaurantlist restaurants={restaurantList}/>
    </>
  )
}

export default App
