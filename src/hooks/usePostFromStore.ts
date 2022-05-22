import { IPost } from 'types/post.types';

export const usePostFromStore = (posts: IPost[] | [], postId: string): IPost | undefined => {
    if (posts.length === 0) {
        return;
    }

    return posts.find((post) => String(post.id) === postId);
};
