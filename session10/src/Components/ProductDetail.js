import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams()
    return (
        <div>
            <h3>Product ID: {params.productId}</h3>
        </div>
    )
}

export default ProductDetail;