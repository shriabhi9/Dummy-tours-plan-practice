import Card from "./Card";
import './Container.css'
export default function Container({tours,removeTours}){
    
    return (
        <div className="container">
            <div className="heading-container">
                <h1 className="heading">Plan with me</h1>
            </div>
            <div className="card-container">
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTours={removeTours}></Card>
                    })
                }
            </div>
        </div>
    );
}