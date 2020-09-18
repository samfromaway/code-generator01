import { space2, space3 } from './sharedContent';

export function keysChecking(props) {
  const requiredKeys = props.items
    .filter((e) => e.isRequired)
    .map((e) => e.myKey);
  const optionalKeys = props.items
    .filter((e) => e.isRequired === false)
    .map((e) => e.myKey);

  const addQuotesToArrayElement = (array) => {
    const arrayWithQuotes = [];
    array.forEach((e) => {
      arrayWithQuotes.push(`'${e}'`);
    });
    return arrayWithQuotes;
  };
  const hasAllContent = ` &&\n${space3}request.resource.data.keys().hasAll(requiredFields)`;
  const hasOnlyContent = ` &&\n${space3}request.resource.data.keys().hasOnly(allFields)`;
  const hasAll = props.hasAllKeys ? hasAllContent : '';
  const hasOnly = props.onlyCurrentKeys ? hasOnlyContent : '';
  const hasKeysContent = hasAll + hasOnly;
  const hasKeysCallContent = ` &&\n${space3}checkKeys()`;
  const optionalFieldsContent = `\n${space3}let optionalFields = [${addQuotesToArrayElement(
    optionalKeys
  )}];`;
  const allFieldsContent = `\n${space3}let allFields = requiredFields.concat(optionalFields);`;
  const optionalFields = props.onlyCurrentKeys ? optionalFieldsContent : '';
  const allFields = props.onlyCurrentKeys ? allFieldsContent : '';
  const hasKeysFunctionStart = `${space2}function checkKeys() {
        let requiredFields = [${addQuotesToArrayElement(requiredKeys)}];`;
  const hasKeyFunctionsEnd = `\n${space3}return ${hasKeysContent.slice(12)}
      }`;
  const hasKeysFunctionContent =
    hasKeysFunctionStart + optionalFields + allFields + hasKeyFunctionsEnd;

  const hasKeysCall = (name) => {
    if (name === 'create' || name === 'update') {
      if (props.onlyCurrentKeys || props.hasAllKeys) {
        return hasKeysCallContent;
      } else return '';
    } else return '';
  };

  return { hasKeysFunctionContent, hasKeysCall };
}
