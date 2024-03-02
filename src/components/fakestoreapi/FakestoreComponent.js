import { useEffect, useState } from "react"
import "./FakestoreComponent.css";

export function FakestoreComponent() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    function loadAllCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                const categoriesWithAll = ["all", ...data];
                setCategories(categoriesWithAll);
            })
            .catch(error => console.log("Error" + error))
    }

    function loadAllProducts(URL) {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.log("Error" + error))
    }

    function handleCategoriesChange(event) {
        if (event.target.value == "all") {
            loadAllProducts("https://fakestoreapi.com/products")
        } else {
            loadAllProducts(`https://fakestoreapi.com/products/category/${event.target.value}`);
        }
    }

    useEffect(() => {
        loadAllCategories();
        loadAllProducts(URL);
    }, [])


    return (
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-2 bg-dark text-white mt-2">
                <div><h2>FakeStore</h2></div>
                <div>
                    <span className="me-4">Home</span>
                    <span className="me-4">Electronics</span>
                    <span className="me-4">Jewelery</span>
                    <span className="me-4">Men's Fashion</span>
                    <span className="me-4">Womenen's Fashion</span>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-cart me-3"></span>

                </div>
            </header>
            <section className="mt-4 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Select Categories</label>
                    </div>
                    {<select onChange={handleCategoriesChange} className="form-select">
                        {
                            categories.map((category) =>
                                <option key={category} value={category}>{category.toUpperCase()}</option>
                            )}
                    </select>}
                </nav>
                <main className="col-10 d-flex flex-wrap">
                    {
                        products.map((product) =>
                            <div key={product.id} className="card m-2 p-2">
                                <img src={product.image} height="150" className="card-img-top"></img>
                                <div className="card-header">
                                    <p className="card-title">{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd><span className="bi bi-star-fill text-success"></span>{product.rating.rate}[{product.rating.count}]</dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger w-100"><span className="bi bi-card4"></span> Add to cart</button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>



        </div>
    )
}