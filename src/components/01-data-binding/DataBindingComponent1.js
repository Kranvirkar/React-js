
export function DataBindingComponent1() {

    var id =12;
    var name ="Samsung TV";
    var stock = true;
    var price = 454554;
    return (
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Product ID</dt>
                <dd>{id}</dd>
            </dl>
            <dl>
                <dt>Product Name</dt>
                <dd>{name}</dd>
            </dl>
            <dl>
                <dt>Product Price</dt>
                <dd>{price}</dd>
            </dl>
            <dl>
                <dt>Product Stock</dt>
                <dd>{(stock==true)? "Available":"Out of stock"}</dd>
            </dl>
        </div>
    )
}