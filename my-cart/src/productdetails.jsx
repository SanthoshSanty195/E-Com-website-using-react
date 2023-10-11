import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Rate,Skeleton } from 'antd';



const ProductDetails = () => {

    let {id} = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const getProduct = () => {
            setLoading(true);
            axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            console.log(response.data)
            setProduct(response.data)
            setLoading(false)
            })
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
            <div className='col-md-6'>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} style={{height:"450px", width:"400px"}} />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead"><i className="fw-bold me-2">Ratings</i>
                <Rate allowHalf defaultValue={product.rating && product.rating.rate} style={{color:"black"}} className="me-2" />
                ({product.rating && product.rating.count})
                </p>
                <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2">Add To Cart</button>
                <button className="btn btn-dark ms-2 py-2">Go To Cart</button>
            </div>
            </>
        )
    }

    return (
        <>
            <div>
                <div className="container py-5">
                    <div className="row py-4">
                        {loading ? <Loading /> : <ShowProduct />}
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductDetails;