import React from 'react';
import './Docs.css'; // Import your custom CSS file

const Docs = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 text-white">
                {/* Sidebar content */}
            </div>

            {/* Main content */}
            <div className="w-4/5 bg-white">
                {/* Main content */}
            </div>
        </div>
    );
};

export default Docs;