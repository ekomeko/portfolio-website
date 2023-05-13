import Discord from "./Discord";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function Hireme() {
    const [formData,setFormData] = useState({
        data: {
            name: "",
            email: "",
            message: ""
        },
        error: {},
    })

   const { Send } = Discord();

   const postToDiscord = async () => {

    const description = `Name: ${formData.data.name}\nEmail: ${formData.data.email}\nMessage: ${formData.data.message}`;
    console.log(description);
    Send(description);
   };

    return (
        
        <div style={hiremeContainer} className="card">
            <form  onSubmit={(e) => {
                e.preventDefault();
                postToDiscord();
            }}>
            <div>
                <label className="form-label" htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Your Name" className="form-control" onChange={(e) => {
                    const name = e.target.value;
                    setFormData((prevState) => ({
                        data: {
                            ...prevState.data,
                            name: name,
                        },
                        error: {},
                    }));
                }} />
            </div>
            <div>
                <label className="form-label" htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Your Email" className="form-control" onChange={(e) =>{
                    const email = e.target.value;
                    setFormData((prevState) => ({
                        data: {
                            ...prevState.data,
                            email: email,
                        },
                        error: {},
                    }));
                }} />
            </div>
            <div>
                <label className="form-label" htmlFor="message">Message:</label>
                <textarea cols="40" rows="5" id="message" name="message" placeholder="Enter Your Message" 
                className="form-control" onChange={(e) => {
                    const message = e.target.value;
                    setFormData((prevState) => ({
                        data: {
                            ...prevState.data,
                            message: message,
                        },
                        error: {},
                    }));
                }}
                ></textarea>
            </div>
            <Button type="submit" variant="outline-dark">Send</Button>
            </form>
        </div>
        
    );
    
}

const hiremeContainer = {
    // Adjust the styling as per your requirements
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    marginBottom: '30px',
    marginTop: '30px',
  };
  


export default Hireme;