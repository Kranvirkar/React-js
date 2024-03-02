import { useState } from "react"

export function SortComponent() {
    const [cities] = useState(["Hyd", "Mumbai", "Delhi", "Kolkata", "Simla", "Goa"]);
    const [buttonClass, setButtonClass] = useState('bi bi-sort-alpha-down');

    function handdleSortClick(event) {
        if (event.target.className == "bi bi-sort-alpha-down") {
            setButtonClass('bi bi-sort-alpha-up');
            cities.sort();
        } else {
            setButtonClass('bi bi-sort-alpha-down')
            cities.sort();
            cities.reverse();
        }
    }

    return (<div className="container-fluid mb-3">
        <h2 className="mt-3">Cities List  <button className="btn btn-success" onClick={handdleSortClick}  ><span className={buttonClass}></span></button></h2>
        <ol>
            {
                cities.map(city =>
                    <li key={city}>{city}</li>
                )
            }
        </ol>
    </div>
    )
}