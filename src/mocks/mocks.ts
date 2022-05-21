import { IUserVerboseFront } from 'types/user.types';

const MOCK_USER_RAW = {
    name: 'Ivan Ivanov',
    userId: '1',
};

export const MOCK_USERS = [MOCK_USER_RAW, MOCK_USER_RAW, MOCK_USER_RAW];

export const MOCK_USER: IUserVerboseFront = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        bs: 'harness real-time e-markets',
    },
};

export const MOCK_POST = {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

export const MOCK_POSTS = [MOCK_POST, MOCK_POST, MOCK_POST];

const MOCK_COMMENT = {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
};

export const MOCK_COMMENTS = [MOCK_COMMENT, MOCK_COMMENT, MOCK_COMMENT];
