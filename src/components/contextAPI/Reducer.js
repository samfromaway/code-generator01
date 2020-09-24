import React from 'react';
import CodeBlock from './../CodeBlock';

const Reducer = ({
  actionNameSingular,
  actionNamePlural,
  namePlural,
  uniqueSelector,
  actions,
}) => {
  // intro
  const intro = `
  export default (state, action) => {
  switch (action.type) {`;

  // get
  const reducerGet = `    
  case 'GET_${actionNamePlural}':
      return {
        ...state,
        ${namePlural}: action.payload,
        ${actions.loading.checked ? 'loading: false,' : ''} 
      };`;

  //add
  const reducerAdd = `    
    case 'ADD_${actionNameSingular}':
      return {
        ...state,
        ${namePlural}: [action.payload, ...state.${namePlural}],
        ${actions.loading.checked ? 'loading: false,' : ''} 
      }; `;

  // delete
  const reducerDel = `
  case 'DELETE_${actionNameSingular}':
      return {
        ...state,
        ${namePlural}: state.${namePlural}.filter(
          (element) => element.${uniqueSelector} !== action.payload
        ),
        ${actions.loading.checked ? 'loading: false,' : ''} 
      };`;

  //edit
  const reducerEdit = `  
  case 'EDIT_${actionNameSingular}':
      return {
        ...state,
        ${namePlural}: state.${namePlural}.map((element) => 
          element.${uniqueSelector} === action.payload.${uniqueSelector} ? action.payload.updatedItem : element
        ),
        ${actions.loading.checked ? 'loading: false,' : ''} 
      };`;

  // error
  const reducerError = `    
  case '${actionNamePlural}_ERROR':
      return {
        ...state,
        error: action.payload,
        ${actions.loading.checked ? 'loading: false,' : ''} 
      };`;

  // set-loading
  const reducerSetLoading = `
  case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };`;

  // outro
  const outro = `    
    default:
    throw new Error('Unsupported action type of ${namePlural}');
  }
};
    `;

  const getContent = actions.get.checked ? reducerGet : '';
  const addContent = actions.add.checked ? reducerAdd : '';
  const deleteContent = actions.delete.checked ? reducerDel : '';
  const editContent = actions.edit.checked ? reducerEdit : '';
  const setLoadingContent = actions.loading.checked ? reducerSetLoading : '';

  const reducer =
    intro +
    getContent +
    addContent +
    deleteContent +
    editContent +
    setLoadingContent +
    reducerError +
    outro;

  const reducerContent =
    actionNameSingular && actionNamePlural && uniqueSelector
      ? reducer
      : 'Fill out the required form fields to see the code.';

  return <CodeBlock content={reducerContent} />;
};

export default Reducer;
