import { IPost } from 'types/post.types';

export interface IPostsListProps {
    posts: IPost[];
    userId: string;
    isWithButton?: boolean;
}
