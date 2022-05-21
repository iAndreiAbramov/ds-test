import React from 'react';
import { cn } from '@bem-react/classname';

import { IUserVerboseProps } from './UserVerbose.types';

import './UserVerbose.scss';

const CnUserVerbose = cn('userVerbose');

export const UserVerbose: React.FC<IUserVerboseProps> = ({ user }) => {
    const { username, name, email, phone, website, company } = user;
    return (
        <article className={CnUserVerbose()}>
            <h2 className={CnUserVerbose('title')}>{username}</h2>
            <table className={CnUserVerbose('table')}>
                <tr className={CnUserVerbose('row')}>
                    <td className={CnUserVerbose('cell')}>Name</td>
                    <td className={CnUserVerbose('cell')}>{name}</td>
                </tr>
                <tr className={CnUserVerbose('row')}>
                    <td className={CnUserVerbose('cell')}>Email</td>
                    <td className={CnUserVerbose('cell')}>{email}</td>
                </tr>
                <tr className={CnUserVerbose('row')}>
                    <td className={CnUserVerbose('cell')}>Phone</td>
                    <td className={CnUserVerbose('cell')}>{phone}</td>
                </tr>
                <tr className={CnUserVerbose('row')}>
                    <td className={CnUserVerbose('cell')}>Website</td>
                    <td className={CnUserVerbose('cell')}>{website}</td>
                </tr>
                <tr className={CnUserVerbose('row')}>
                    <td className={CnUserVerbose('cell')}>Company</td>
                    <td className={CnUserVerbose('cell')}>{`${company.name}, ${company.bs}`}</td>
                </tr>
            </table>
        </article>
    );
};
