import { useEffect, useState } from "react"

export function HttpComponent() {
    const [mars, setmars] = useState({ photos: [] });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY");
                const data = await response.json();
                setmars(data); // Assuming the API response has a key named 'photos' containing an array of photos
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Camera</th>
                        <th scope="col">Rover name</th>
                    </tr>
                </thead>
                <tbody>
                    {mars.photos.map(tmp =>
                        <tr key={tmp.id}>
                            <th scope="row">{tmp.id}</th>
                            <td>
                                <a href={tmp.img_src} target="_blank"><img height="200px" width="200px" src={tmp.img_src}></img></a>
                            </td>
                            <td>{tmp.camera.full_name}</td>
                            <td>{tmp.rover.name}</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}