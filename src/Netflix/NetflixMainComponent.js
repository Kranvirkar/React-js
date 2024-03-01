import { RegisterComponent } from "./NetflixRegisterComponent"
export function MainComponent(){
    return (
        <main>
            <div>
                <h1>Unlimited movies, TV shows and more.</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <RegisterComponent/>
            </div>  
        </main>    
    )
}