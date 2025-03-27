import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
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
            <div className="auth-form-container">
                <h1 className="text-center mb-2" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    Welcome Back
                </h1>
                <p className="text-center mb-4" style={{ color: '#6B7280' }}>
                    Sign in to access your account
                </p>

                <div className="divider mb-4"></div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
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
                    
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline" style={{ textDecoration: 'none' }}>
                        Forgot password?
                    </Link>
                    
                    <button type="submit" className="auth-button">
                        Sign In
                    </button>

                    <div className="divider-with-text my-6">
                        <span className="px-2 text-gray-500">Or continue with</span>
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
                        Don't have an account? <Link to="/signup" className="text-primary font-medium" style={{ textDecoration: 'none' }}>Sign up</Link>
                    </div>
                </form>

                <footer className="text-center text-xs text-gray-500 mt-8">
                    © {new Date().getFullYear()} AppName. All rights reserved.
                </footer>
            </div>
        </motion.div>
    );
};

export default Login;