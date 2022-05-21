import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
export { MOCK_USERS } from './mocks/mocks';
export { MOCK_POSTS } from './mocks/mocks';
export { MOCK_USER } from './mocks/mocks';
export { MOCK_COMMENTS } from './mocks/mocks';
export { MOCK_POST } from './mocks/mocks';
