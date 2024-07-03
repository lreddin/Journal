import Hero from "./component/hero";
import Card from "./component/card";
import places from "./data";

function App() {

  const placeCards = places.map(place => {
    return ( <Card
      key={place.id}
      {...place}
            />
    )
  })

  return (
    <>
      <Hero />
      {...placeCards}
      
    </>
  )
}

export default App
