import React from 'react';
import { cn } from '@bem-react/classname';

import { IPostVerboseProps } from './PostVerbose.types';

import './PostVerbose.scss';

const CnPostVerbose = cn('postVerbose');

export const PostVerbose: React.FC<IPostVerboseProps> = ({ post }) => {
    const { title, body } = post;
    return (
        <div className={CnPostVerbose()}>
            <h3 className={CnPostVerbose('title')}>{title}</h3>
            <p className={CnPostVerbose('body')}>{body}</p>
        </div>
    );
};
