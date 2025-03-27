import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 100
            }}
        >
            <div className="auth-page">
                <div className="auth-form-container two-columns">
                    <h1 className="text-center mb-2">Join us today</h1>
                    <p className="text-center mb-4 text-gray-500">Create your account to get started</p>

                    <div className="divider mb-4"></div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-columns-container">
                            <div className="form-left-column">
                                <div className="mb-4">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-right-column">
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="password-input-container">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-input"
                                            id="password"
                                            name="password"
                                            placeholder="••••••••"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button 
                                            type="button" 
                                            className="password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <div className="password-input-container">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            className="form-input"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            placeholder="••••••••"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button 
                                            type="button" 
                                            className="password-toggle"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 flex items-start">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                id="agreeTerms"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-600">
                                I agree to the Terms of Service and Privacy Policy
                            </label>
                        </div>

                        <button type="submit" className="auth-button">
                            Create account
                        </button>

                        <div className="divider-with-text my-6">
                            <span className="px-2 text-gray-500">Or sign up with</span>
                        </div>

                        <div className="flex justify-center gap-4 mb-6">
                            <button type="button" className="social-button">
                                <i className="bi bi-google text-lg mr-3"></i>
                                <span>Google</span>
                            </button>
                            <button type="button" className="social-button">
                                <i className="bi bi-facebook text-lg mr-3"></i>
                                <span>Facebook</span>
                            </button>
                        </div>
                        <div className="text-center text-sm text-gray-600">
                            Already have an account? <Link to="/login" className="text-primary font-medium" style={{ textDecoration: 'none' }} >Sign in</Link>
                        </div>
                    </form>

                    <footer className="text-center text-xs text-gray-500 mt-8">
                        © {new Date().getFullYear()} AppName. All rights reserved.
                    </footer>
                </div>
            </div>
        </motion.div>
    );
};

export default Signup;