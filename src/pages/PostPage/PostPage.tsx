import React from 'react';
import { MOCK_COMMENTS, MOCK_POST } from 'mocks/mocks';

import { CommentsList } from 'components/CommentsList';
import { PostVerbose } from 'components/PostVerbose';

export const PostPage: React.FC = () => {
    return (
        <>
            <PostVerbose post={MOCK_POST} />
            <CommentsList comments={MOCK_COMMENTS} />
        </>
    );
};
