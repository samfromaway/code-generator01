import { space, space2, space3 } from './sharedContent';

export function signedInUser(propsSignedInActions) {
  const isSignedInCall = (name) => {
    if (name) {
      const item = propsSignedInActions.filter((e) => e.title === name);
      if (item[0].checked) {
        return isSignedInCallContent;
      } else return '';
    }
  };
  const isSignedInFunctionContent = `${space2}function isSignedIn() {
  ${space2}return request.auth != null;
  ${space}}
  `;
  const isSignedInCallContent = ` &&\n${space3}isSignedIn()`;

  return { isSignedInCall, isSignedInFunctionContent };
}
