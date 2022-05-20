import React from 'react';

import { Button } from 'components/Button/Button';

export const UsersPage: React.FC = () => {
    return (
        <>
            <div>Users page</div>
            <Button handleClick={() => null}>Смотреть профиль</Button>
        </>
    );
};
