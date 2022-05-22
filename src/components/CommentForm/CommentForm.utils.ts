import { ICommentFormValues } from 'types/comment-form.types';

type CommentFormErrors = Record<keyof ICommentFormValues, string | undefined>;

export const validateForm = ({ name, email, body }: ICommentFormValues): CommentFormErrors => {
    const errors = {} as CommentFormErrors;

    if (!name) {
        errors.name = 'Please enter your name';
    }

    if (!email) {
        errors.email = 'Please enter your email';
    }

    if (!body) {
        errors.body = 'Please enter your comment';
    }

    return errors;
};
