import Product from "../product/Product";
import Typography from "../ui/Typography/Typography";
import { StyledProducts } from "./Products.styled";

export default function Products({products, addToCart}){

    return(
        <>
            <Typography text='Ürünler' elementType='h1' />
            <StyledProducts>
                    {products.map( ({name, price}) => (
                        <Product key= {name} name={name} price={price} addToCart={addToCart} />
                        ) ) }
            </StyledProducts>
        </>
    )
}