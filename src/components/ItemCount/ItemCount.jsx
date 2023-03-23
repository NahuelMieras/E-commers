import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(1);

  return (
    <>
        <button>+</button>
        <p>10</p>
        <button>-</button>


    </>
  )
}

export default ItemCount