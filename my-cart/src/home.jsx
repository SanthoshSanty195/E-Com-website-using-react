import bg from './images/bg3.jpg'
import Products from './products';

const Home = () => {

    const style = {
        color:"black"
    }

    return (
        <>
            <div>
                <div className="card text-bg-dark border-0">
                    <img src={bg} className="card-img" alt="bg" height="650px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0" style={style}>NEW COLLECTIONS ARRIVALS</h5>
                        <p className="card-text fs-2" style={style}>
                           CHECK OUT ALL THE TRENDS
                        </p>
                        </div>
                    </div>
                </div>
                <Products />
            </div>
        </>
    )
}

export default Home;