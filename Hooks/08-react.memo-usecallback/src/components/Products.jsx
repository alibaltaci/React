import Product from "./Product";

export default function Products({products, addToCart}){

    return(
        <>
            <h1>Ürünler</h1>
            <div>
                {products.map( ({name, price}) => (
                    <Product key= {name} name={name} price={price} addToCart={addToCart} />
                ) ) }
            </div>
        </>
    )
}