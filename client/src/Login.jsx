import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login(){
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData:", formData);

        axios.post('http://localhost:3000/login', formData)
            .then(result => {console.log("Result from server:", result)
            if(result.data=== "Success"){
                navigate('/home')
            }
            })
            .catch(err => console.log("Error from server:", err));
    };

        return(
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center mb-3">
                        <label htmlFor="pass">
                            <strong>Password</strong>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="text-xs px-2 border rounded-lg hover:bg-gray-200"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p>Sign up</p>
                <Link
                    to='/register'
                    className="btn btn-deafult border w-100 bg-light rounded-0 text-decoration-none"
                >
                    Register
                </Link>
                </div>
                </div>
        )
}

export default Login