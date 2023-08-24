import getAllProducts from "../../../utils/getAllProducts";
import SingleProduct from "./singleProduct";


const ProductsPage = async({searchParams}) => {
    const products=await getAllProducts(searchParams.categoryId)
    return (
        <div>
            {
                products.map((product)=><SingleProduct key={product.id} product={product}></SingleProduct>)
            }
        </div>
    );
};

export default ProductsPage;