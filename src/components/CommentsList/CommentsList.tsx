import React, { useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';

import { Button } from 'components/Button';
import { Comment } from 'components/Comment';

import { ICommentsListProps } from './CommentsList.types';

import './CommentsList.scss';

const CnCommentsList = cn('commentsList');

export const CommentsList: React.FC<ICommentsListProps> = ({ comments, errorMessage }) => {
    const [isFormActive, setIsFormActive] = useState(false);
    const handleAddButtonClick = useCallback(() => setIsFormActive(true), []);

    return (
        <section className={CnCommentsList()}>
            <h2 className={CnCommentsList('title')}>Comments</h2>
            <div className={CnCommentsList('listWrapper')}>
                {comments.length > 0 &&
                    comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
                {comments.length === 0 && !errorMessage && (
                    <div>This post wasn&apos;t commented yet</div>
                )}
                {errorMessage && <div>{errorMessage}</div>}
            </div>
            {!isFormActive && <Button handleClick={handleAddButtonClick}>Add a comment</Button>}
        </section>
    );
};
