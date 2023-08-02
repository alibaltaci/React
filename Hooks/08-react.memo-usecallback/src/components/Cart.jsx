import Product from "./Product";
import Button from "./ui/Button";

export default function Cart( {cart, emptyCart} ){

    return(
        <>
            <h1>
                Sepetiniz 
                <Button onClick={emptyCart} text='Sepeti Boşalt' />
            </h1>
            <div>
                {
                    cart.map( ({name, price}, index) => (
                        <Product key={index} name={name} price={price} />
                    ))
                }
            </div>
        </>
    )
}