import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Checkout = (props) => {
    const [name, setName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [sameAsBilling, setSameAsBilling] = useState(false);
    let navi = useNavigate()


    const handleCheckboxChange = () => {
        setSameAsBilling(!sameAsBilling);
        if (!sameAsBilling) {
            setName(name)
            setAddress1(address1);
            setAddress2(address2);
            setCity(city);
            setState(state);
        } else {
            setName("")
            setAddress1("");
            setAddress2("");
            setCity("");
            setState("");
        }
    };

    const handleSubmit = () => {
        let obj = {
            name: name,
            address1: address1,
            address2: address2,
            city: city,
            state: state
        }
        props.setDetails([...props.details, obj])
        navi("/confirm")
    }


    return (
        <>
            <div className="container bg-dark" style={{ paddingBottom: "130px" }}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-white text-center mt-5">Enter Your Details</h2>
                        <div className="card mt-5" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
                            <h2 className="card-header d-flex justify-content-center fw-bold" style={{ backgroundColor: "#3498db", color: "white" }}>Billing Address</h2>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Name :
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            style={{ borderColor: "black" }}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Address 1 :
                                        </label>
                                        <input
                                            type="text"
                                            value={address1}
                                            style={{ borderColor: "black" }}
                                            onChange={(e) => setAddress1(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Address 2 :
                                        </label>
                                        <input
                                            type="text"
                                            value={address2}
                                            style={{ borderColor: "black" }}
                                            onChange={(e) => setAddress2(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            City :
                                        </label>
                                        <input
                                            type="text"
                                            value={city}
                                            style={{ borderColor: "black" }}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            State :
                                        </label>
                                        <input
                                            type="text"
                                            value={state}
                                            style={{ borderColor: "black" }}
                                            onChange={(e) => setState(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-5" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
                            <h2 className="card-header d-flex justify-content-center fw-bold" style={{ backgroundColor: "#3498db", color: "white" }}>Shipping Address</h2>
                            <div className="card-body">
                                <form>
                                <div className="mb-3 fw-bold">
                                    <input type="checkbox" checked={sameAsBilling} onChange={handleCheckboxChange} /> Same as Billing Address
                                </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Name :
                                        </label>
                                        <input
                                            type="text"
                                            style={{ borderColor: "black" }}
                                            value={sameAsBilling ? name : ""}
                                            onChange={(e) => setName(e.target.value)}
                                            disabled={sameAsBilling}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Address 1 :
                                        </label>
                                        <input
                                            type="text"
                                            style={{ borderColor: "black" }}
                                            value={sameAsBilling ? address1 : ""}
                                            onChange={(e) => setAddress1(e.target.value)}
                                            disabled={sameAsBilling}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Address 2 :
                                        </label>
                                        <input
                                            type="text"
                                            style={{ borderColor: "black" }}
                                            value={sameAsBilling ? address2 : ""}
                                            onChange={(e) => setAddress2(e.target.value)}
                                            disabled={sameAsBilling}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            City :
                                        </label>
                                        <input
                                            type="text"
                                            style={{ borderColor: "black" }}
                                            value={sameAsBilling ? city : ""}
                                            onChange={(e) => setCity(e.target.value)}
                                            disabled={sameAsBilling}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            State :
                                        </label>
                                        <input
                                            type="text"
                                            style={{ borderColor: "black" }}
                                            value={sameAsBilling ? state : ""}
                                            onChange={(e) => setState(e.target.value)}
                                            disabled={sameAsBilling}
                                        />
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center" style={{ padding: "20px" }}>
                            <button
                                type="button"
                                className="btn btn-primary"
                                style={{ backgroundColor: "#27ae60", color: "white" }}
                                onClick={() => handleSubmit()}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;