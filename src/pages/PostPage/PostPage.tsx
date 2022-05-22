import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usePostFromStore } from 'hooks/usePostFromStore';
import {
    selectCommentPostFetchStatus,
    selectComments,
    selectCommentsError,
    selectCommentsFetchStatus,
} from 'store/selectors/comments-selectors';
import { selectPost } from 'store/selectors/post-selectors';
import { selectPosts, selectPostsFetchStatus } from 'store/selectors/posts-selectors';
import { useAppDispatch } from 'store/store';
import { requestCommentsThunkAction } from 'store/thunk-actions/comments-thunk-actions';
import { requestPostThunkAction } from 'store/thunk-actions/posts-thunk-actions';
import { FetchStatus } from 'types/api.types';

import { CommentsList } from 'components/CommentsList';
import { LoaderDelayed } from 'components/LoaderDelayed';
import { PostVerbose } from 'components/PostVerbose';

export const PostPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const posts = useSelector(selectPosts);
    const post = useSelector(selectPost);
    const postFetchStatus = useSelector(selectPostsFetchStatus);
    const comments = useSelector(selectComments);
    const commentsFetchStatus = useSelector(selectCommentsFetchStatus);
    const commentPostFetchStatus = useSelector(selectCommentPostFetchStatus);
    const commentsError = useSelector(selectCommentsError);
    const { postId } = useParams() as { postId: string };
    const postFromStore = usePostFromStore(posts, postId);
    const [isFetchingComplete, setIsFetchingComplete] = useState(false);

    const isPostDataFetching = useMemo(
        () =>
            postFetchStatus !== FetchStatus.Initial &&
            postFetchStatus !== FetchStatus.Error &&
            postFetchStatus !== FetchStatus.Done,
        [postFetchStatus],
    );

    const isCommentsDataFetching = useMemo(
        () =>
            commentsFetchStatus !== FetchStatus.Initial &&
            commentsFetchStatus !== FetchStatus.Error &&
            commentsFetchStatus !== FetchStatus.Done,
        [commentsFetchStatus],
    );

    const isCommentPosting = useMemo(
        () => commentPostFetchStatus === FetchStatus.Fetching,
        [commentPostFetchStatus],
    );

    const handleCommentAdd = useCallback(() => {
        setIsFetchingComplete(false);
    }, []);

    useEffect(() => {
        if (!postFromStore) {
            void dispatch(requestPostThunkAction(postId));
        }
    }, [dispatch, postFromStore, postId]);

    useEffect(() => {
        void dispatch(requestCommentsThunkAction(postId));
    }, [dispatch, postId]);

    return (
        <>
            {isFetchingComplete ? (
                <>
                    <PostVerbose post={postFromStore || post} />
                    <CommentsList
                        comments={comments}
                        errorMessage={commentsError}
                        postId={postId}
                        onCommentAdd={handleCommentAdd}
                    />
                </>
            ) : (
                <LoaderDelayed
                    dependencies={[isPostDataFetching, isCommentsDataFetching, isCommentPosting]}
                    handleContentIsReady={setIsFetchingComplete}
                />
            )}
        </>
    );
};
