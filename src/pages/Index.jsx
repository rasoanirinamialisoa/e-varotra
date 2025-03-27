import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to Futuristic Auth</h1>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
        <Link to="/signup" className="btn btn-outline-primary btn-lg">Sign Up</Link>
      </div>
    </div>
  );
};

export default Index;