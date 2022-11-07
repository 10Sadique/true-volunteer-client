import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-200/70 p-20">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-4xl">
                        <span className="text-cyan-600">True</span>
                        <span className="text-gray-700">Volunteers</span>
                    </h1>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">
                        Copyright &copy; 2022. Jafar Sadique Jahan. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
