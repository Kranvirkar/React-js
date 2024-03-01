
export function DataBindingComponent3() {
    var categories = ["Electronis", "Footwear", "Fashion"];
    return (
        <div className="container-fluid">
            <h2>Categories</h2>
            <ol>
                {
                    categories.map((category) =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
            <select>
                {
                    categories.map((category) =>
                        <option key={category}>{category}</option>
                    )
                }
            </select>
            <table className="table table-hover">
                <thead>
                    <tr><th>Categories</th></tr>
                </thead>
                <tbody>
                    {
                        categories.map((category) =>
                            <tr key={category}><td>{category}</td></tr>)
                    }
                </tbody>
            </table>
            <h2>Categories</h2>
            <ul className="list-unstyled">
                {
                    categories.map((category) =>
                        <li key={category}><input type="checkbox" />{category}</li>)
                }
            </ul>
            <h2>Buttons</h2>
            <div>
                {categories.map((category) =>
                    <button key={category} className="btn btn-danger mb-2 d-block">{category}</button >)}
            </div>
            {
                categories.map((category) =>
                    <li key={category}><a href="#" >{category}</a></li>)
            }
        </div>
    )
}