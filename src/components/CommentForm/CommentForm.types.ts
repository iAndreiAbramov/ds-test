import { ICommentFormValues } from 'types/comment-form.types';

export interface ICommentForm {
    handleFormSubmit: (values: ICommentFormValues) => void;
}
