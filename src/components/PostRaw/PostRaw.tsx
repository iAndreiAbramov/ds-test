import React from 'react';
import { cn } from '@bem-react/classname';

import { IPostRawProps } from './PostRaw.types';

import './PostRaw.scss';

const CnPostRaw = cn('postRaw');

export const PostRaw: React.FC<IPostRawProps> = ({ post, handleClick }) => {
    const { title, body, id } = post;
    return (
        <article className={CnPostRaw()} onClick={() => handleClick(String(id))}>
            <h3 className={CnPostRaw('title')}>{title}</h3>
            <p className={CnPostRaw('body')}>{body}</p>
        </article>
    );
};
