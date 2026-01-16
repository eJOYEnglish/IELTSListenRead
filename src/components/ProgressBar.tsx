import React from 'react';

interface ProgressBarProps {
    current: number;
    total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const percentage = Math.min(100, Math.max(0, (current / total) * 100));

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div
                className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${percentage}%` }}
            ></div>
            <div className="text-right text-xs text-gray-500 mt-1">
                {Math.round(percentage)}% Complete
            </div>
        </div>
    );
};
