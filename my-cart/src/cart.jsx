import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons'
import { decreaseQuantity, increaseQuantity, removeFromCart } from './stateManager/action/methods'



const Cart = () => {
    const state = useSelector((state) => state.cart.items)
    const navi = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams

    const quantityMinus = (productId) => {
        dispatch(decreaseQuantity(productId))
    }

    const quantityPlus = (productId) => {
        dispatch(increaseQuantity(productId))
    }

    const deleleFromCart = (productId) => {
        dispatch(removeFromCart(productId))
    }

    

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-dark rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3 className='d-flex justify-content-center' style={{ color: "white" }}>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    }




    return (
        <>
            <h1 className='d-flex justify-content-center bg-dark' style={{ color: "white" }}>Cart</h1>
            <hr />
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map((item) => {
                return (
                    <>
                        <div className="px-4 my-5 bg-dark rounded-3" key={item.id}>
                            <div className="container py-4">
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <img src={item.image} alt={item.title} height="200px" width="180px" />
                                    </div>
                                    <div className="col-md-4">
                                        <h3 style={{ color: "white" }}>{item.title}</h3>
                                        <p className="lead fw-bold" style={{ color: "white" }}>
                                            {item.qty}  X  ${item.price}  =  ${item.qty * item.price}
                                        </p>
                                        <button className="btn btn-primary me-4" onClick={() => { quantityMinus(item.id) }}>
                                            <i className="fa fa-minus"></i>
                                        </button>
                                        <button className="btn btn-primary me-4" onClick={() => { quantityPlus(item.id) }}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                        <button className="btn btn-danger" onClick={() => { deleleFromCart(item.id) }}>
                                            <DeleteOutlined />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            {state.length !== 0 && (
                <div className="container">
                    <div className="row">
                        <button onClick={()=>navi("/checkout")} className="btn btn-success mb-5 w-25 mx-auto">Proceed To checkout</button>
                    </div>
                </div>
            )}
            
        </>
    )
}

export default Cart