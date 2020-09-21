import React from 'react';
import CodeBlock from './../CodeBlock';

const State = ({
  namePlural,
  uniqueSelector,
  actions,
  actionNameSingular,
  actionNamePlural,
  capitalizedNamePlural,
  capitalizedNameSingular,
  updatedItem,
  newItem,
}) => {
  const intro = `
import React, { useReducer, useContext } from 'react';
import ${capitalizedNamePlural}Context from './${namePlural}Context';
import ${capitalizedNamePlural}Reducer from './${namePlural}Reducer';

`;

  const customHook = `export const use${capitalizedNamePlural} = () => {
  const { state, dispatch } = useContext(${capitalizedNamePlural}Context);
  return [state, dispatch];
};

`;

  //get
  const get = `export async function get${capitalizedNamePlural} (dispatch) {
  ${actions.loading.checked ? 'setLoading(dispatch);' : ''} 
  try {
    const res = await fetch('YOUR_API')
    const data = await res.json();

    dispatch({
      type: 'GET_${actionNamePlural}',
      payload: data,
    }); 
  // catch won't work with fetch, use axios... or delete the catch block  
  } catch (err) {
    console.error(err);
    dispatch({
      type: '${actionNamePlural}_ERROR',
      payload: err,
    }); 
  }
  };
  
`;

  //add
  const add = `export async function add${capitalizedNameSingular} (dispatch, ${newItem}) {
  ${actions.loading.checked ? 'setLoading(dispatch);' : ''} 
  try {
    const res = await fetch('YOUR_API')

    dispatch({
      type: 'ADD_${actionNameSingular}',
      payload: 'YOUR_API_RESPONSE',
    }); 
  // catch won't work with fetch, use axios... or delete the catch block  
  } catch (err) {
    console.error(err);
    dispatch({
      type: '${actionNamePlural}_ERROR',
      payload: err,
    }); 
  }
  };

`;

  //delete
  const del = `export async function delete${capitalizedNameSingular} (dispatch, ${uniqueSelector}) {
  ${actions.loading.checked ? 'setLoading(dispatch);' : ''} 
  try {
    fetch('YOUR_API')

    dispatch({
      type: 'DELETE_${actionNameSingular}',
      payload: ${uniqueSelector},
    });
  // catch won't work with fetch, use axios... or delete the catch block  
  } catch (err) {
    console.error(err);
    dispatch({
      type: '${actionNamePlural}_ERROR',
      payload: err,
    }); 
  }
  };
  
`;

  //edit
  const edit = `export async function edit${capitalizedNameSingular} (dispatch, ${updatedItem}) {
  ${actions.loading.checked ? 'setLoading(dispatch);' : ''} 
  try {
  const res = await fetch('YOUR_API')
    
    dispatch({
      type: 'EDIT_${actionNameSingular}',
      payload: {
      id: RESPONSE-ID,
      updatedItem: YOUR-UPDATED-ITEM-RESPONSE
    },
    });  
  // catch won't work with fetch, use axios... or delete the catch block  
  } catch (err) {
    console.error(err);
    dispatch({
      type: '${actionNamePlural}_ERROR',
      payload: err,
    }); 
  }
  };
  
`;

  const setLoading = `export const setLoading = (dispatch) => dispatch({ type: 'SET_LOADING' });
  
`;

  const outro = `const ${capitalizedNamePlural}State = ({children}) => {
  const initialState = {
    ${namePlural}: [],
    error: null,
    ${actions.loading.checked ? 'loading: false,' : ''} 
  };

  const [state, dispatch] = useReducer(${capitalizedNamePlural}Reducer, initialState);

  return (
    <${capitalizedNamePlural}Context.Provider value={{state, dispatch}}>
      {children}
    </${capitalizedNamePlural}Context.Provider>
  );
};

export default ${capitalizedNamePlural}State;`;

  const getContent = actions.get.checked ? get : '';
  const addContent = actions.add.checked ? add : '';
  const deleteContent = actions.delete.checked ? del : '';
  const editContent = actions.edit.checked ? edit : '';
  const setLoadingContent = actions.loading.checked ? setLoading : '';

  const state =
    intro +
    customHook +
    getContent +
    addContent +
    deleteContent +
    editContent +
    setLoadingContent +
    outro;

  const stateContent =
    namePlural && capitalizedNameSingular && uniqueSelector
      ? state
      : 'Fill out the required form fields to see the code.';

  return <CodeBlock content={stateContent} />;
};

export default State;
