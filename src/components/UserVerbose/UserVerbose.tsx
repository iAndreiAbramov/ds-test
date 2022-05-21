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
                <tbody>
                    <tr className={CnUserVerbose('row')}>
                        <td className={CnUserVerbose('cell')}>Name</td>
                        <td className={CnUserVerbose('cell')}>{name}</td>
                    </tr>
                    <tr className={CnUserVerbose('row')}>
                        <td className={CnUserVerbose('cell')}>Email</td>
                        <td className={CnUserVerbose('cell')}>
                            <a href={`mailto:${email}`}>{email}</a>
                        </td>
                    </tr>
                    <tr className={CnUserVerbose('row')}>
                        <td className={CnUserVerbose('cell')}>Phone</td>
                        <td className={CnUserVerbose('cell')}>
                            <a href={`tel:${phone}`}>{phone}</a>
                        </td>
                    </tr>
                    <tr className={CnUserVerbose('row')}>
                        <td className={CnUserVerbose('cell')}>Website</td>
                        <td className={CnUserVerbose('cell')}>
                            <a href={`https://${website}`}>{website}</a>
                        </td>
                    </tr>
                    <tr className={CnUserVerbose('row')}>
                        <td className={CnUserVerbose('cell')}>Company</td>
                        <td
                            className={CnUserVerbose('cell')}
                        >{`${company.name}, ${company.bs}`}</td>
                    </tr>
                </tbody>
            </table>
        </article>
    );
};
