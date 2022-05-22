import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@bem-react/classname';
import { useAppDispatch } from 'store/store';
import { postCommentThunkAction } from 'store/thunk-actions/comments-thunk-actions';
import { ICommentFormValues } from 'types/comment-form.types';

import { Button } from 'components/Button';
import { Comment } from 'components/Comment';
import { CommentForm } from 'components/CommentForm';

import { ICommentsListProps } from './CommentsList.types';

import './CommentsList.scss';

const CnCommentsList = cn('commentsList');

export const CommentsList: React.FC<ICommentsListProps> = ({
    comments,
    errorMessage,
    postId,
    onCommentAdd,
}) => {
    const dispatch = useAppDispatch();
    const [isFormActive, setIsFormActive] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    const handleAddButtonClick = useCallback(() => {
        setIsFormActive(true);
    }, []);

    const handleFormSubmit = useCallback(
        (values: ICommentFormValues) => {
            setIsFormActive(false);
            onCommentAdd(false);
            void dispatch(postCommentThunkAction({ postId, values }));
        },
        [dispatch, postId, onCommentAdd],
    );

    useEffect(() => {
        if (isFormActive) {
            formRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

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
            {isFormActive ? (
                <div className={CnCommentsList('formWrapper')} ref={formRef}>
                    <CommentForm handleFormSubmit={handleFormSubmit} />
                </div>
            ) : (
                <Button handleClick={handleAddButtonClick}>Add a comment</Button>
            )}
        </section>
    );
};
