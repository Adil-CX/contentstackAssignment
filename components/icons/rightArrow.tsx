import React from 'react';

type Props = {
    className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="10"
        fill="none"
        viewBox="0 0 25 10"
        className={className}
    >
        <path fill="#F7EAE3" d="M24.5 5l-6.035-5v4H.5v2h17.965v4L24.5 5z"></path>
    </svg>
);

export default Icon;
