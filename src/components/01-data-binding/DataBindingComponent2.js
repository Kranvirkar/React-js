export function DataBindingComponent2() {
    var product={
        "id":12,
        "name":"Apple",
        "price":4545
    }
    return (
        <div>
<h2>Product Details</h2>
            <dl>
                <dt>Product ID</dt>
                <dd>{product.id}</dd>
            </dl>
            <dl>
                <dt>Product Name</dt>
                <dd>{product.name}</dd>
            </dl>
            <dl>
                <dt>Product Price</dt>
                <dd>{product.price}</dd>
            </dl>
            
        </div>
    )
}