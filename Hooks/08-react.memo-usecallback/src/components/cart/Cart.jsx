import Product from "../product/Product";
import { StyledProducts } from "../products/Products.styled";
import Button from "../ui/Button/Button";
import Typography from "../ui/Typography/Typography";

export default function Cart( {cart, emptyCart, total, removeFromCart} ){
 
    return(
        <>
            <Typography  text='Sepetiniz' elementType='h1'>
                <Button onClick={emptyCart} text='Sepeti Boşalt' />
            </Typography>
            {
                total > 0 && (
                    <Typography elementType='h3' text={ `Toplam Tutar: ${total.toLocaleString()} tl` } />
                )
            }
            <StyledProducts>
                {
                    cart.map( ({name, price}, index) => (
                        <Product key={index} index={index} name={name} price={price} removeFromCart={removeFromCart} />
                    ))
                }
            </StyledProducts>
        </>
    )
}