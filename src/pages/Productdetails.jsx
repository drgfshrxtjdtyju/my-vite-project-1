import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const location = useLocation()
    const value = location.state?.value

    if (!value) {
        return <div>No product details available.</div>
    }

    console.log(value);

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={value.image} className="img-fluid rounded-start" alt={value.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                        <p className="card-text"><small className="text-body-secondary">{value.category}</small></p>
                        <strong>{value.rating?.count} / {value.rating?.rate}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

