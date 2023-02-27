// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [displayed, setDisplayed] = useState(null);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setDisplayed(data.message);
      });
  }, []);

  if (!displayed) return <p>Loading...</p>;

  return <img src={displayed} alt="A Random Dog" />;
}

export default App;
