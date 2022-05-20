export const AppRoute = {
    Posts: (): string => '/posts',
    Post: (postId: string): string => `/posts/${postId}`,
    Root: (): string => '/',
    Users: (): string => '/users',
    User: (userId: string): string => `/users/${userId}`,
};
