import { api } from 'api/api';
import { ApiRoute } from 'constants/ApiRoute';
import { IPost } from 'types/post.types';

export const requestPosts = async (userId: string): Promise<IPost[]> =>
    api
        .get<Promise<IPost[]>>(ApiRoute.Posts(userId))
        .then((response) => response?.data)
        .catch(() => {
            throw new Error('Unknown server error, please try later');
        });

export const requestPost = async (postId: string): Promise<IPost> =>
    api
        .get<Promise<IPost>>(ApiRoute.Post(postId))
        .then((response) => response?.data)
        .catch(() => {
            throw new Error('Unknown server error, please try later');
        });
