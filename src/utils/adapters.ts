import { IUserBack, IUserRawFront, IUserVerboseFront } from 'types/user.types';

export const adaptUserToFront = ({
    id,
    name,
    username,
    phone,
    email,
    website,
    company,
}: IUserBack): IUserVerboseFront => ({
    id,
    name,
    username,
    phone,
    email,
    website,
    company: {
        name: company.name,
        bs: company.bs,
    },
});

export const adaptUsersToFront = (usersBack: IUserBack[]): IUserRawFront[] =>
    usersBack.map(({ id, name }) => {
        return {
            userId: String(id),
            name,
        };
    });
