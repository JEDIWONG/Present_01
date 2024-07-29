import {useNavigate} from "react-router-dom";
import{ useState } from "react";
import "./AuthSurprise.css";
import heart from "./assets/heart.jpg";

function AuthSurprise(){

    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const nav = useNavigate();
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your actual validation logic
        const correctName = "慧慧"; // Replace with the correct name
        const correctCode = "0820"; // Replace with the correct code

        if (name === correctName && code === correctCode) {
            nav("/Surprise")
        } else {
            setError("Only 慧慧 can Enter");
        }
    };

    return(

        <>
            <div>

                <div className="title">
                    <h1>Decrypting Love Letter</h1>
                    <p style={{color:"white"}}>"Just For You"</p>
                </div>

                <div className="content-container">
                
                    <div className="card-container">
                        
                        <h3 >To : </h3>
                        <img src={heart}></img>

                        <form  onSubmit={handleSubmit} className="input-container">
                            <input placeholder="Your Name" value={name} onChange={handleNameChange}></input>
                            <input placeholder="Code" value={code} onChange={handleCodeChange}></input>
                            <button type="submit" className="button-enter">Open</button> 
                        </form>

                        {error && <p className="error-message">{error}</p>}  
                        
                    </div>

                </div>

            </div>

        </>
    );
}

export default AuthSurprise;