import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const ProductDetails = () => {

    let id = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = () => {
            setLoading(true);
            axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            setProduct(response.data)
            setLoading(false)
            })
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
            <div>
            Loading...
            </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>

            </>
        )
    }

    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        {loading ? <Loading /> : <ShowProduct />}
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductDetails;