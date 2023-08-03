import Button from "../ui/Button/Button";
import Typography from "../ui/Typography/Typography";
import { StyledProduct } from "./Product.styled";

export default function Product( {name, price, addToCart} ){

    return(
        <StyledProduct>
            <Typography text={name} elementType='h2' />
            <Typography text={ `${price.toLocaleString()} tl` } elementType='h3' />
            {
                addToCart && (
                    <>
                        <Button onClick={()=> addToCart({name,price})} text='Sepete Ekle' variant='green' />
                    </>
                )
            }
        </StyledProduct>
    )
}