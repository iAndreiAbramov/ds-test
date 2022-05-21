import { api } from 'api/api';
import { AxiosError } from 'axios';
import { ApiRoute } from 'constants/ApiRoute';
import { IUserBack } from 'types/user.types';

export const requestUsers = async (): Promise<IUserBack[]> =>
    await api
        .get<Promise<IUserBack[]>>(ApiRoute.Users())
        .then((response) => response?.data)
        .catch((error: AxiosError) => {
            throw new Error(
                (error?.response?.data as { error: string })?.error ||
                    'Unknown server error, please try later',
            );
        });
