import React from 'react';
import { cn } from '../utils/cn';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm',
            secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',
            outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700',
            ghost: 'hover:bg-gray-100 text-gray-700',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-xs',
            md: 'px-4 py-2 text-sm',
            lg: 'px-6 py-3 text-base',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={props.disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
