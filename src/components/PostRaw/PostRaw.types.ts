import { IPost } from 'types/post.types';

export interface IPostRawProps {
    post: IPost;
    handleClick: (postId: string) => void;
}
