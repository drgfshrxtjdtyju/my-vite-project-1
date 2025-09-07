
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'bootstrap'


const Product = () => {
  const [data, setData] = useState([])
  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
      .then((res) => {

        setData(res.data)

      })



  }, [])
  console.log(data);


  return (
    <div className="container text-center">
      <div className="row align-items-start">
        {data.map((value, index) => (
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={value.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.description}</p>
                <p className="card-text">{value.price}</p>
                <Link
                  to={`/product/details`}
                  state={{ value }}
                  className="btn btn-outline-success">details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
