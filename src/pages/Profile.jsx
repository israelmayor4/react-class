import { useParams } from "react-router-dom"



export const Profile = () => {
    const param = useParams();

    console.log(param);
    
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name: {param.name}</p>
            <p>Age: {param.age}</p>
        </div>
    )
}