import React from 'react';

import { IButtonProps } from './Button.types';

import './Button.scss';

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
    ({ handleClick, customClass, children, ...props }, ref) => {
        return (
            <button
                className={`button ${customClass ? customClass : ''}`}
                ref={ref}
                onClick={handleClick}
                {...props}
            >
                {children}
            </button>
        );
    },
);
