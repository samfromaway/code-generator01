import { space2, space3 } from './sharedContent';

export function isValidElements(
  capitalizedVariable,
  prefixFirebase,
  items,
  propsItems,
  variable
) {
  const isValidCall = (name) => {
    if (name === 'create' || name === 'update') {
      if (propsItems.length > 0) {
        return isValidCallContent;
      } else return '';
    } else return '';
  };

  const isValidCallContent = ` &&\n${space3}isValid${capitalizedVariable}(${prefixFirebase})`;
  // slice used to delete last &&

  const isValidFunctionContent = `${space2}function isValid${capitalizedVariable}(${variable}) {
  ${space2}return (${items.slice(0, -2)}
  ${space2});
${space2}}
`;

  return { isValidCall, isValidFunctionContent };
}
