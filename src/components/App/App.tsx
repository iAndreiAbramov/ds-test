import { AppRoute } from 'constants/AppRoute';

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PostPage } from 'pages/PostPage';
import { PostsPage } from 'pages/PostsPage';
import { UserPage } from 'pages/UserPage';
import { UsersPage } from 'pages/UsersPage';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Root()} element={<Navigate to={AppRoute.Users()} />} />
                <Route path={AppRoute.Users()}>
                    <Route index element={<UsersPage />} />
                    <Route path=":userId" element={<UserPage />} />
                </Route>
                <Route path={AppRoute.Posts()}>
                    <Route index element={<PostsPage />} />
                    <Route path=":postId" element={<PostPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
