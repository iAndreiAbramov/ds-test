import { Dispatch, SetStateAction } from 'react';
import { IComment } from 'types/comment.types';

export interface ICommentsListProps {
    comments: IComment[];
    errorMessage?: string;
    postId: string;
    onCommentAdd: Dispatch<SetStateAction<boolean>>;
}
