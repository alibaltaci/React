import Button from "./ui/Button";

export default function Product( {name, price, addToCart} ){

    return(
        <div>
            <h2>{ name }</h2>
            <h3>{ price.toLocaleString() } tl</h3>
            {
                addToCart && (
                    <>
                        <Button onClick={()=> addToCart({name,price})} text='Sepete Ekle' variant='green' />
                    </>
                )
            }
        </div>
    )
}