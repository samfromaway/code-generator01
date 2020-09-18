import { space2, space3 } from './sharedContent';

export function ownerAccess(
  propsOnlyOwnerGetAccessActions,
  variable,
  propsOwnerSelector
) {
  const isOwnerCall = (name) => {
    if (name) {
      const item = propsOnlyOwnerGetAccessActions.filter(
        (e) => e.title === name
      );
      if (item[0].checked) {
        if (name === 'create') {
          return ` &&\n${space3}isOwner(request.resource.data)`;
        } else if (name === 'update') {
          return ` &&\n${space3}isOwner(request.resource.data) &&\n${space3}isOwner(resource.data)`;
        } else return ` &&\n${space3}isOwner(resource.data)`;
      } else return '';
    }
  };
  const isOwnerFunctionContent = `${space2}function isOwner(${variable}) {
  ${space2}return request.auth.uid == ${variable}.${propsOwnerSelector};
${space2}}
  `;
  return { isOwnerCall, isOwnerFunctionContent };
}
