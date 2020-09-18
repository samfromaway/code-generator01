import React, { useState, useEffect } from 'react';
import Paper02 from './../Paper02';
import CodeBlock from './../CodeBlock';
import { capitalize } from './../../functions/textTransform';
import { isValidElements } from './validationFirebaseContent/isValidElements';
import {
  space4,
  andBrk,
  brk,
  brkSpace,
} from './validationFirebaseContent/sharedContent';
import { signedInUser } from './validationFirebaseContent/signedInUser';
import { ownerAccess } from './validationFirebaseContent/ownerAccess';
import { rateLimit } from './validationFirebaseContent/rateLimit';
import { keysChecking } from './validationFirebaseContent/keysChecking';

const ValidationFirebase = (props) => {
  const [items, setItems] = useState('');
  const prefixFirebase = 'request.resource.data';
  const collectionName = props.collectionName || '<ADD-COLLECTION-NAME>';
  const variable = props.variable || '<ADD-VARIABLE>';
  const someSignedInActionChecked = props.signedInActions.some(
    (e) => e.checked
  );
  const someOnlyOwnerGetAccessActionChecked = props.onlyOwnerGetAccessActions.some(
    (e) => e.checked
  );
  const someRateLimitChecked = props.rateLimitActions.some((e) => e.checked);
  const capitalizedVariable = capitalize(variable);

  const setContent = () => {
    props.items.forEach((e) => {
      setItems(generateItems(e));
    });
  };

  useEffect(() => {
    setContent();
    // eslint-disable-next-line
  }, [props.items, props.variable]);

  //KEYS//
  const type = (input) => {
    const inputType = () => {
      if (input.type === 'boolean') {
        return 'bool';
      } else if (input.type === 'object') {
        return 'map';
      } else if (input.type === 'array') {
        return 'list';
      } else return input.type;
    };

    return `${variable}.${input.myKey} is ${inputType()}`;
  };

  const rangeType = (input) => {
    const inputRange =
      input.type === 'string' ? `'${input.range}'` : input.range;

    const rangeSymbol = () => {
      switch (input.rangeType) {
        case 'equal':
          return '==';
        case 'notEqual':
          return '!=';
        case 'lessThan':
          return '<';
        case 'lessThanOrEqualTo':
          return '<=';
        case 'greaterThan':
          return '>';
        case 'greaterThanOrEqualTo':
          return '>=';
        case 'between':
          return '>=';
        default:
          return '';
      }
    };

    return `${variable}.${input.myKey} ${rangeSymbol()} ${inputRange}`;
  };

  const range2 = (input) => {
    const inputRange =
      input.type === 'string' ? `'${input.range2}'` : input.range2;
    return `${variable}.${input.myKey} <= ${inputRange}`;
  };

  const isRequired = (input) => {
    return `${variable}.${input.myKey} != ''`;
  };

  const generateItems = (item) => {
    const comment = item.myKey ? `\n${space4}// ${variable}.${item.myKey}` : '';
    const curType = item.type ? brk + space4 + type(item) : '';
    const curRangeType = item.rangeType
      ? andBrk + space4 + rangeType(item)
      : '';
    const curRange2 = item.range2 ? andBrk + space4 + range2(item) : '';
    const curRequired = item.isRequired
      ? andBrk + space4 + isRequired(item)
      : '';
    const allContent =
      comment + curType + curRangeType + curRange2 + curRequired + ' &&';
    return allContent;
  };

  // IS VALID FUNCTION
  const { isValidCall, isValidFunctionContent } = isValidElements(
    capitalizedVariable,
    prefixFirebase,
    items,
    props.items,
    variable
  );

  // IS SIGNED IN
  const { isSignedInCall, isSignedInFunctionContent } = signedInUser(
    props.signedInActions
  );

  // ONLY OWNER ACCESS
  const { isOwnerCall, isOwnerFunctionContent } = ownerAccess(
    props.onlyOwnerGetAccessActions,
    variable,
    props.ownerSelector
  );

  //KEYS CHECKING
  const { hasKeysFunctionContent, hasKeysCall } = keysChecking(props);

  // RATE LIMIT
  const { rateLimitCall, rateLimitFunctionContent } = rateLimit(
    props.rateLimit,
    props.createdDateSelector,
    props.rateLimitActions
  );

  // CALLS FOR FIREBASE
  const calls = (name) => {
    const content =
      isValidCall(name) +
      isOwnerCall(name) +
      isSignedInCall(name) +
      rateLimitCall(name) +
      hasKeysCall(name);
    if (
      isValidCall(name) ||
      isOwnerCall(name) ||
      isSignedInCall(name) ||
      rateLimitCall(name) ||
      hasKeysCall(name)
    ) {
      return `allow ${name}: if ${content.slice(12)};`;
    } else return `allow ${name}: if //add validation or remove`;
  };

  // GENERATE CONTENT
  const generateContent = () => {
    const isValidFunction =
      props.items.length > 0 ? isValidFunctionContent + brk : '';
    const isOwnerFunction = someOnlyOwnerGetAccessActionChecked
      ? isOwnerFunctionContent + brk
      : '';
    const isSignedInFunction = someSignedInActionChecked
      ? isSignedInFunctionContent + brk
      : '';

    const rateLimitFunction = someRateLimitChecked
      ? rateLimitFunctionContent + brk
      : '';

    const hasKeysFunction =
      props.hasAllKeys || props.onlyCurrentKeys
        ? hasKeysFunctionContent + brk
        : '';

    const allContent =
      `    match /${collectionName}/{itemId}{` +
      brkSpace +
      calls('read') +
      brkSpace +
      calls('create') +
      brkSpace +
      calls('update') +
      brkSpace +
      calls('delete') +
      brkSpace +
      '// FUNCTIONS' +
      brk +
      isSignedInFunction +
      isOwnerFunction +
      isValidFunction +
      rateLimitFunction +
      hasKeysFunction +
      '    }' +
      brk +
      brk;
    return allContent;
  };

  return (
    <Paper02 title="Firestore Validation">
      <CodeBlock content={generateContent()} />
    </Paper02>
  );
};

export default ValidationFirebase;
