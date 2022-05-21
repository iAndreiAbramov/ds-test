export const ApiRoute = {
    Users: (): string => '/users',
    User: (userId: string): string => `/users/${userId}`,
};
