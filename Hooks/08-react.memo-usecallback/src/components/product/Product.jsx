import React from "react";
import Button from "../ui/Button/Button";
import Typography from "../ui/Typography/Typography";
import { StyledProduct } from "./Product.styled";

export default React.memo( function Product ( {name, price, index, addToCart, removeFromCart} ){

    return(
        <StyledProduct>
            <Typography text={name} elementType='h2' />
            <Typography text={ `${price.toLocaleString()} tl` } elementType='h3' />
            {
                addToCart && (
                        <Button onClick={()=> addToCart({name,price})} text='Sepete Ekle' variant='green' />
                )
            }
            {
                removeFromCart && (
                        <Button onClick={() => removeFromCart({price},index) }  text='Kaldır' variant='danger' />
                )
            }
        </StyledProduct>
    )
})