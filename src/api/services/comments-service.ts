import { api } from 'api/api';
import { ApiRoute } from 'constants/ApiRoute';
import { IComment } from 'types/comment.types';

export const requestComments = async (postId: string): Promise<IComment[]> =>
    api
        .get<Promise<IComment[]>>(ApiRoute.Comments(postId))
        .then((response) => response?.data)
        .catch(() => {
            throw new Error('Unknown server error, please try later');
        });
