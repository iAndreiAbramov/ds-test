import React from 'react';
import { Field, Form } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { ICommentForm } from './CommentForm.types';

import './CommentForm.scss';

const CnCommentForm = cn('commentForm');

export const CommentForm: React.FC<ICommentForm> = ({ handleFormSubmit }) => {
    return (
        <Form onSubmit={handleFormSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={CnCommentForm()}>
                    <h2 className={CnCommentForm('title')}>Add your comment</h2>
                    <Field name="name">
                        {({ input }) => (
                            <label className={CnCommentForm('label')}>
                                <div>
                                    <span className={CnCommentForm('labelText')}>Name</span>
                                    <span className={CnCommentForm('asterisk')}>&nbsp;*</span>
                                </div>
                                <input
                                    className={CnCommentForm('input')}
                                    placeholder="Enter your comment"
                                    type="text"
                                    {...input}
                                />
                            </label>
                        )}
                    </Field>
                    <Field name="email">
                        {({ input }) => (
                            <label className={CnCommentForm('label')}>
                                <div>
                                    <span className={CnCommentForm('labelText')}>Email</span>
                                    <span className={CnCommentForm('asterisk')}>&nbsp;*</span>
                                </div>
                                <input
                                    className={CnCommentForm('input')}
                                    type="text"
                                    placeholder="Enter your comment"
                                    {...input}
                                />
                            </label>
                        )}
                    </Field>
                    <Field name="comment">
                        {({ input }) => (
                            <label className={CnCommentForm('label')}>
                                <div>
                                    <span className={CnCommentForm('labelText')}>Comment</span>
                                    <span className={CnCommentForm('asterisk')}>&nbsp;*</span>
                                </div>
                                <textarea
                                    className={CnCommentForm('input', { textarea: true })}
                                    placeholder="Enter your comment"
                                    {...input}
                                />
                            </label>
                        )}
                    </Field>
                    <button type="submit" className="button">
                        Add a comment
                    </button>
                </form>
            )}
        </Form>
    );
};
