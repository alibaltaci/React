import { useState } from 'react';
import { useActionState } from 'react'; // useActionState kancasını içe aktar

async function updateName(name) {
  try {
    // Burada, ismi güncellemek için sunucuya bir istek gönderiyoruz.
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return null;
  } catch (error) {
    return 'Failed to update name';
  }
}

function App() {
  const [name, setName] = useState('');
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const newName = formData.get('name');
      const error = await updateName(newName);
      if (error) {
        return error;
      }
      setName(newName); // İsim başarıyla güncellendiğinde yeni ismi setState ile güncelliyoruz
      return null;
    },
    null,
  );

  return (
    <div>
      <h1>Current Name: {name}</h1> {/* Güncellenmiş ismi ekranda gösteriyoruz */}
      <form action={submitAction}>
        <input type="text" name="name" placeholder="Enter new name" />
        <button type="submit" disabled={isPending}>Update</button>
        {isPending && <p>Updating name...</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default App;




// async function updateName(name) {
//   try {
//     // Burada, ismi güncellemek için sunucuya bir istek gönderiyoruz.
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     return null;
//   } catch (error) {
//     return 'Failed to update name';
//   }
// }

// function App() {
//   const [name, setName] = useState('');
//   const [error, setError] = useState(null);
//   const [isPending, setIsPending] = useState(false);

//   const handleSubmit = async (e) => {
//     event.preventDefault();
//     const newName = e.target.elements.name.value;
//     setIsPending(true);
//     const error = await updateName(newName);
//     setIsPending(false);
//     if (error) {
//       setError(error);
//     } else {
//       setName(newName);
//       e.target.reset()
//     }
//   };

//   return (
//     <div>
//       <h1>Current Name: {name}</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Enter new name"  />
//         <button type="submit" disabled={isPending}>Update</button>
//         {isPending && <p>Updating name...</p>}
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default App;

