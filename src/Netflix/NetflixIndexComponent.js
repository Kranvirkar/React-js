import { HeaderComponent } from "./NetflixHeaderComponent";
import { MainComponent } from "./NetflixMainComponent";
import './NetflixIndex.css';

export function IndexComponent(){
    return (
        <div className="netflix-back">
            <section>
                <HeaderComponent/>
                <MainComponent/>
            </section>  
        </div>
    )
} 