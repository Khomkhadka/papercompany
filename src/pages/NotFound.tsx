
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-paper-800 mb-6">404</h1>
        <p className="text-xl md:text-2xl text-paper-600 mb-8 text-center">
          Oops! We couldn't find the page you're looking for.
        </p>
        <p className="text-paper-600 mb-8 text-center max-w-lg">
          The page may have been moved, deleted, or never existed. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-paper-700 hover:bg-paper-800 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
          >
            Return to Home
          </Link>
          <Link 
            to="/contact" 
            className="bg-transparent hover:bg-paper-100 text-paper-700 font-semibold py-2 px-6 border border-paper-300 rounded transition-colors duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
