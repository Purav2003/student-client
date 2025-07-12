import React from 'react';
import { Loader } from 'lucide-react';

const LoaderComponent = () => {
    return (
        <div className="flex items-center justify-center min-h-[300px]">
            <Loader className="w-10 h-10 text-[#000000] animate-spin" />
        </div>
    );
}

export default LoaderComponent;