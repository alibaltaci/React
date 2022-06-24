import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Home() {

  // useNavigate

  // Home sayfası açıldıktan 3 sn sonra blog sayfasına giden bir fonksiyon yazalım.

  const navigate = useNavigate();

  useEffect( () => {
    setTimeout( () => {
      navigate("blog", { replace: true } );  // gidilecek link / -1 (go back) yazılarak 3 sn gelinen sayfaya dönebilir. /go forward (1) ileriye gider.
    }, 3000);
  }, [navigate])


  return (
    <div>
      
      <h1>Home</h1>
      
    </div>
  )
}
