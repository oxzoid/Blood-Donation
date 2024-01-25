import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        btype: '',
        city: '',
    });

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

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

        axios.post('http://localhost:3000/register', formData)
            .then(result => {console.log("Result from server:", result)
            navigate('/login')})
            .catch(err => console.log("Error from server:", err));
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number">
                            <strong>Phone number +91 </strong>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter number"
                            autoComplete="off"
                            name="phone"
                            className="form-control rounded-0"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                    <div className="mb-3">
                        <label htmlFor="btype">
                            <strong>Blood Type</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter blood type"
                            autoComplete="off"
                            name="btype"
                            className="form-control rounded-0"
                            value={formData.btype}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city">
                            <strong>City of residence</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter city"
                            autoComplete="off"
                            name="city"
                            className="form-control rounded-0"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p>Already have an account</p>
                <Link
                    to='/login'
                    className="btn btn-deafult border w-100 bg-light rounded-0 text-decoration-none"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
