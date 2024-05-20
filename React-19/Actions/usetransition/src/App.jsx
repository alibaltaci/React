import { useState, useTransition } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {

      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Loading..." : "Get Dog Image"}
      </button>
      <br />
      {dogImage && <img src={dogImage} alt="Dog Image" />}
    </div>
  );
}

export default App;
