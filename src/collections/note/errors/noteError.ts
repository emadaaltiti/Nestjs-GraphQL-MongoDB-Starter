import { createError } from 'apollo-errors';

const errorMessageGet = createError('errorMessageGet', {
  message: 'Empty List',
});
const errorMessageCreate = createError('errorMessageCreate', {
  message: 'CREATE.',
});
const errorMessageUpdate = createError('errorMessageCreate', {
  message: 'UPDATE.',
});
const errorMessageFindOne = createError('errorMessageFindOne', {
  message: 'Note Not Found.',
});
const errorMessageDelete = createError('errorMessageDelete', {
  message: 'Note Not Found.',
});

export {
  errorMessageGet,
  errorMessageUpdate,
  errorMessageCreate ,
  errorMessageFindOne,
  errorMessageDelete,
};
