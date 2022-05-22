export const ApiRoute = {
    Users: (): string => '/users',
    User: (userId: string): string => `/users/${userId}`,
    Posts: (userId: string): string => `users/${userId}/posts`,
    Post: (postId: string): string => `/posts/${postId}`,
};
