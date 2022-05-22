import { IComment } from 'types/comment.types';

export interface ICommentsListProps {
    comments: IComment[];
    errorMessage?: string;
}
