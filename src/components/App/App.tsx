import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from 'constants/AppRoute';
import { QueryParam } from 'constants/QueryParam';
import { PostPage } from 'pages/PostPage';
import { PostsPage } from 'pages/PostsPage';
import { UserPage } from 'pages/UserPage';
import { UsersPage } from 'pages/UsersPage';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Root()} element={<Navigate to={AppRoute.Users()} />} />
                <Route path={AppRoute.Users()} element={<UsersPage />} />
                <Route path={AppRoute.User(`:${QueryParam.UserId}`)} element={<UserPage />} />
                <Route path={AppRoute.Posts(`:${QueryParam.UserId}`)} element={<PostsPage />} />
                <Route
                    path={AppRoute.Post(`:${QueryParam.UserId}`, `:${QueryParam.PostId}`)}
                    element={<PostPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};
