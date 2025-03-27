import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        // Here you would add your API call
        setSubmitted(true);
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
                <div className="auth-form-container">
                    <h1 className="text-center mb-2">Forgot Password</h1>
                    <p className="text-center mb-4 text-gray-500">
                        {submitted 
                            ? "A password reset link has been sent to your email address"
                            : "Enter your email to reset your password"}
                    </p>

                    <div className="divider mb-4"></div>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="auth-button">
                                Confirm
                            </button>

                            <div className="text-center text-sm text-gray-600 mt-4">
                                <Link to="/login" className="text-primary font-medium" style={{ textDecoration: 'none' }}>
                                    Back to Login
                                </Link>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center">
                            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                                <p className="text-gray-700">
                                    Please check your email to reset your password.
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    If you don't receive an email, please check your spam folder.
                                </p>
                            </div>
                            <Link 
                                to="/login" 
                                className="auth-button inline-block"
                                style={{ width: 'auto', padding: '12px 24px', textDecoration: 'none' }}
                            >
                                Back to Login
                            </Link>
                        </div>
                    )}

                    <footer className="text-center text-xs text-gray-500 mt-8">
                        © {new Date().getFullYear()} AppName. All rights reserved.
                    </footer>
                </div>
            </div>
        </motion.div>
    );
};

export default ForgotPassword;