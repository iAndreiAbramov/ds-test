import React from 'react';
import { cn } from '@bem-react/classname';

import { Comment } from 'components/Comment';

import { ICommentsListProps } from './CommentsList.types';

import './CommentsList.scss';

const CnCommentsList = cn('commentsList');

export const CommentsList: React.FC<ICommentsListProps> = ({ comments }) => {
    return (
        <section className={CnCommentsList()}>
            <h2 className={CnCommentsList('title')}>Comments</h2>
            <div className={CnCommentsList('listWrapper')}>
                {comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        </section>
    );
};
