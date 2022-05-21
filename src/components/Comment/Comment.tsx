import React from 'react';
import { cn } from '@bem-react/classname';

import { ICommentProps } from './Comment.types';

import './Comment.scss';

const CnComment = cn('comment');

export const Comment: React.FC<ICommentProps> = ({ comment }) => {
    const { email, name, body } = comment;
    return (
        <article className={CnComment()}>
            <h3 className={CnComment('title')}>{`${name}, ${email}`}</h3>
            <p className={CnComment('body')}>{body}</p>
        </article>
    );
};
