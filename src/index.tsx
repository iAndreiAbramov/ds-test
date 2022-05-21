import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';
import { store } from './store/store';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

export { MOCK_USERS } from './mocks/mocks';
export { MOCK_POSTS } from './mocks/mocks';
export { MOCK_USER } from './mocks/mocks';
export { MOCK_COMMENTS } from './mocks/mocks';
export { MOCK_POST } from './mocks/mocks';
