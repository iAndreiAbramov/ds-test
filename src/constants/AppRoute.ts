export const AppRoute = {
    Root: (): string => '/',
    Users: (): string => '/users',
    User: (userId: string): string => `/users/${userId}`,
    Posts: (userId: string): string => `/users/${userId}/posts`,
    Post: (userId: string, postId: string): string => `/users/${userId}/posts/${postId}`,
};
