import React from 'react';

type Props = {
    className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="49"
        fill="none"
        viewBox="0 0 49 49"
        className="className"
    >
        <path
            fill="#42454A"
            d="M20.523.137l16.688 10.259-1.324 1.48-15.84-9.738L1.873 13.32v22.368l18.176 11.175L38.229 35.68V19.394l-15.32 18.04-11.241-16.488 11.24 6.549L49 6.712l-8.905 10.486v19.054c0 .397-.213.735-.524.897L20.517 48.87a.9.9 0 01-.945-.006L.476 37.11a1 1 0 01-.47-.858L0 12.747c0-.396.22-.734.53-.896L19.585.13a.89.89 0 01.94.006z"
        ></path>
    </svg>
);

export default Icon;
