import React from 'react';
import { cn } from '../utils/cn';
import { CheckCircle2, Circle } from 'lucide-react';

interface QuestionCardProps {
    question: string;
    options: { label: string; value: any }[];
    selectedValues: any[]; // Array of selected values (singular or multiple)
    onSelect: (value: any) => void;
    type?: 'single' | 'multiple';
    className?: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    options,
    selectedValues,
    onSelect,
    type = 'single',
    className,
}) => {
    return (
        <div className={cn("bg-white rounded-xl shadow-sm border border-gray-100 p-6", className)}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{question}</h3>
            <div className="space-y-3">
                {options.map((option, index) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                        <button
                            key={index}
                            onClick={() => onSelect(option.value)}
                            className={cn(
                                "w-full text-left p-4 rounded-lg border-2 transition-all flex items-start gap-3",
                                isSelected
                                    ? "border-primary bg-primary/5 text-primary"
                                    : "border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700"
                            )}
                        >
                            <div className={cn("mt-0.5 shrink-0 transition-colors", isSelected ? "text-primary" : "text-gray-300")}>
                                {type === 'single' ? (
                                    isSelected ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />
                                ) : (
                                    <div className={cn(
                                        "h-5 w-5 rounded border-2 flex items-center justify-center",
                                        isSelected ? "bg-primary border-primary" : "border-gray-300"
                                    )}>
                                        {isSelected && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
                                    </div>
                                )}
                            </div>
                            <span className="font-medium">{option.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
