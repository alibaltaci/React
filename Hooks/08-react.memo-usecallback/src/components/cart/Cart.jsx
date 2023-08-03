import Product from "../product/Product";
import { StyledProducts } from "../products/Products.styled";
import Button from "../ui/Button/Button";
import Typography from "../ui/Typography/Typography";

export default function Cart( {cart, emptyCart} ){

    return(
        <>
            <Typography  text='Sepetiniz' elementType='h1'>
                <Button onClick={emptyCart} text='Sepeti Boşalt' />
            </Typography>
            <StyledProducts>
                {
                    cart.map( ({name, price}, index) => (
                        <Product key={index} name={name} price={price} />
                    ))
                }
            </StyledProducts>
        </>
    )
}