

const Confirm = (props) => {



    return (
        <>
            {props.details.map((item) => {
                return (
                    <>
                        <div className="container bg-dark" style={{ paddingBottom: "130px" }}>
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <h2 className="text-white text-center mt-5">Confirmation</h2>
                                    <div className="card mt-5" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
                                        <h2 className="card-header d-flex justify-content-center fw-bold" style={{ backgroundColor: "#3498db", color: "white" }}>Shipping Address</h2>
                                        <div className="card-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        Name : {item.name}
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        Address 1 : {item.address1}
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        Address 2 : {item.address2}
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        City : {item.city}
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        State : {item.state}
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card mt-5" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
                                        <h2 className="card-header d-flex justify-content-center fw-bold" style={{ backgroundColor: "#3498db", color: "white" }}>Payment Method</h2>
                                        <div className="card-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        UPI
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        Debit Card
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        Credit Card
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        Cash ON Delivery
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        EMI Options
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card mt-5" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
                                        <h2 className="card-header d-flex justify-content-center fw-bold" style={{ backgroundColor: "#3498db", color: "white" }}>Order Summary</h2>
                                        <div className="card-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">
                                                        
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center" style={{ padding: "20px" }}>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{ backgroundColor: "#27ae60", color: "white" }}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    );
}


export default Confirm;