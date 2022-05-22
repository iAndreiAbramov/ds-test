import React from 'react';
import { Field, Form } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { ICommentForm } from './CommentForm.types';
import { validateForm } from './CommentForm.utils';

import './CommentForm.scss';

const CnCommentForm = cn('commentForm');

export const CommentForm: React.FC<ICommentForm> = ({ handleFormSubmit }) => {
    return (
        <Form onSubmit={handleFormSubmit} validate={validateForm}>
            {({ handleSubmit, hasValidationErrors, submitFailed }) => (
                <form
                    onSubmit={handleSubmit}
                    className={CnCommentForm({ hasErrors: hasValidationErrors && submitFailed })}
                >
                    <h2 className={CnCommentForm('title')}>Add your comment</h2>
                    <Field name="name">
                        {({ input, meta }) => (
                            <label className={CnCommentForm('label')}>
                                <div>
                                    <span className={CnCommentForm('labelText')}>Name</span>
                                    <span className={CnCommentForm('asterisk')}>&nbsp;*</span>
                                </div>
                                <input
                                    className={CnCommentForm('input', {
                                        incorrect:
                                            meta.invalid &&
                                            !meta.dirtySinceLastSubmit &&
                                            submitFailed,
                                    })}
                                    placeholder="Enter your name"
                                    type="text"
                                    {...input}
                                />
                                <div className={CnCommentForm('error')}>
                                    {submitFailed && meta.error && meta.error}
                                </div>
                            </label>
                        )}
                    </Field>
                    <Field name="email">
                        {({ input, meta }) => (
                            <label className={CnCommentForm('label')}>
                                <div>
                                    <span className={CnCommentForm('labelText')}>Email</span>
                                    <span className={CnCommentForm('asterisk')}>&nbsp;*</span>
                                </div>
                                <input
                                    className={CnCommentForm('input', {
                                        incorrect:
                                            meta.invalid &&
                                            !meta.dirtySinceLastSubmit &&
                                            submitFailed,
                                    })}
                                    type="text"
                                    placeholder="Enter your email"
                                    {...input}
                                />
                                <div className={CnCommentForm('error')}>
                                    {submitFailed && meta.error && meta.error}
                                </div>
                            </label>
                        )}
                    </Field>
                    <Field name="body">
                        {({ input, meta }) => (
                            <label className={CnCommentForm('label')}>
                                <div>
                                    <span className={CnCommentForm('labelText')}>Comment</span>
                                    <span className={CnCommentForm('asterisk')}>&nbsp;*</span>
                                </div>
                                <textarea
                                    className={CnCommentForm('input', {
                                        textarea: true,
                                        incorrect:
                                            meta.invalid &&
                                            !meta.dirtySinceLastSubmit &&
                                            submitFailed,
                                    })}
                                    placeholder="Enter your comment"
                                    {...input}
                                />
                                <div className={CnCommentForm('error')}>
                                    {submitFailed && meta.error && meta.error}
                                </div>
                            </label>
                        )}
                    </Field>
                    <button
                        type="submit"
                        className="button"
                        disabled={submitFailed && hasValidationErrors}
                    >
                        Add a comment
                    </button>
                </form>
            )}
        </Form>
    );
};
