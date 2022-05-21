import { api } from 'api/api';
import { ApiRoute } from 'constants/ApiRoute';
import { IUserBack } from 'types/user.types';

export const requestUsers = async (): Promise<IUserBack[]> =>
    await api
        .get<Promise<IUserBack[]>>(ApiRoute.Users())
        .then((response) => response?.data)
        .catch(() => {
            throw new Error('Unknown server error, please try later');
        });
