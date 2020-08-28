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
  const getProviderValue = actions.get.checked
    ? `get${capitalizedNamePlural},`
    : '';
  const addProviderValue = actions.add.checked
    ? `add${capitalizedNameSingular},`
    : '';
  const deleteProviderValue = actions.delete.checked
    ? `delete${capitalizedNameSingular},`
    : '';
  const editProviderValue = actions.edit.checked
    ? `edit${capitalizedNameSingular},`
    : '';

  const intro = `
import React, { useReducer } from 'react';
import ${capitalizedNamePlural}Context from './${namePlural}Context';
import ${capitalizedNamePlural}Reducer from './${namePlural}Reducer';

const ${capitalizedNamePlural}State = ({children}) => {
  const initialState = {
    ${namePlural}: [],
    error: null,
    ${actions.loading.checked ? 'loading: false,' : ''} 
  };

  const [state, dispatch] = useReducer(${capitalizedNamePlural}Reducer, initialState);
  `;

  const setLoading = `
  const setLoading = () => dispatch({ type: 'SET_LOADING' });
  `;

  //get
  const get = `
  async function get${capitalizedNamePlural} () {
    ${actions.loading.checked ? 'setLoading();' : ''} 
    try {
    const res = await fetch('YOUR_API')
    const data = await res.json();

    dispatch({
      type: 'GET_${actionNamePlural}',
      payload: data,
    }); 
  } catch (err) {
    console.error(err);
    dispatch({
      type: '${actionNamePlural}_ERROR',
      payload: err,
    }); 
  }
  };`;

  //add
  const add = `
  async function add${capitalizedNameSingular} (${newItem}) {
    ${actions.loading.checked ? 'setLoading();' : ''} 
    try {
    const res = await fetch('YOUR_API')

    dispatch({
      type: 'ADD_${actionNameSingular}',
      payload: 'YOUR_API_RESPONSE',
    }); 
  } catch (err) {
    console.error(err);
    dispatch({
      type: '${actionNamePlural}_ERROR',
      payload: err,
    }); 
  }
  };`;

  //delete
  const del = `
  async function delete${capitalizedNameSingular} (${uniqueSelector}) {
    ${actions.loading.checked ? 'setLoading();' : ''} 
    try {
      fetch('YOUR_API')

    dispatch({
      type: 'DELETE_${actionNameSingular}',
      payload: ${uniqueSelector},
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: '${actionNamePlural}_ERROR',
      payload: err,
    }); 
  }
  };`;

  //edit
  const edit = `
  async function edit${capitalizedNameSingular} (${uniqueSelector}, ${updatedItem}) {
    ${actions.loading.checked ? 'setLoading();' : ''} 
    try {
    const res = await fetch('YOUR_API')
    
    dispatch({
      type: 'EDIT_${actionNameSingular}',
      payload: {
      'YOUR_API_RESPONSE_ID,'
      'YOUR_API_RESPONSE_UPDATED ITEM,'
    },
    });  
  } catch (err) {
    console.error(err);
    dispatch({
      type: '${actionNamePlural}_ERROR',
      payload: err,
    }); 
  }
  };`;

  const outro = `
  return (
    <${capitalizedNamePlural}Context.Provider value={{
      ${namePlural}: state.${namePlural},
      ${getProviderValue}
      ${addProviderValue}
      ${deleteProviderValue}
      ${editProviderValue}      
      ${actions.loading.checked ? namePlural + 'Loading: state.loading,' : ''} 
    }}>
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
    setLoadingContent +
    getContent +
    addContent +
    deleteContent +
    editContent +
    outro;

  const stateContent =
    namePlural && capitalizedNameSingular && uniqueSelector
      ? state
      : 'Fill out the required form fields to see the code.';

  return <CodeBlock content={stateContent} />;
};

export default State;
