import { useState, useEffect } from 'react';
import axios from 'axios';
import { Skeleton } from 'antd';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(true);
  let [compMounted,setCompMounted] = useState(true)

  let navi = useNavigate()



  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      axios.get("https://fakestoreapi.com/products").then((response) => {
        console.log(response.data);
        if (compMounted) {
          setProducts(response.data);
          setFilter(response.data);
          setLoading(false);
        }
      })
        .catch((error) => {
          console.error("Error", error);
        });
    };
    getProducts();
    return () => {
      setCompMounted(false);
    };
  }, []);


  const Loading = () => {
    return (
      <>
        <div className='d-flex justify-content-center'>
          <Skeleton avatar paragraph={{rows: 4,}}/>
          <Skeleton avatar paragraph={{rows: 4,}}/>
          <Skeleton avatar paragraph={{rows: 4,}}/>
        </div>
      </>
    )
  }

  const filterProduct = (data) => {
      const filteredProducts = products.filter((item) => item.category === data);
      setFilter(filteredProducts);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-dark me-2" onClick={() => setFilter(products)}>All</button>
          <button className="btn btn-success me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-danger me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-warning me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-info me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((item) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={item.id} >
                  <img src={item.image} className="card-img-top" alt={item.title} height={"250px"} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title.substring(0, 12)}...</h5>
                    <p className="card-text lead fw-bold">
                      ${item.price}
                    </p>
                    <a href="#" class="btn btn-outline-primary" onClick={()=>navi(`/products/${item.id}`)}>Buy Now</a>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }


  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">Products</h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

