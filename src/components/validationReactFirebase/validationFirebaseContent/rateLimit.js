import { space2, space3 } from './sharedContent';

export function rateLimit(
  propsRateLimit,
  propsCreatedDateSelector,
  propsRateLimitActions
) {
  const rateLimitTime = propsRateLimit || '<ADD-RATE-LIMIT>';
  const createdDateSelector = propsCreatedDateSelector || '<ADD-DATE-SELECTOR>';

  const rateLimitCall = (name) => {
    if (name === 'update') {
      const item = propsRateLimitActions.filter((e) => e.title === name);
      if (item[0].checked) {
        return ` &&\n${space3}isCalm()`;
      } else return '';
    } else return '';
  };
  const rateLimitFunctionContent = `${space2}function isCalm() {
  ${space2}return ( 
  ${space3}request.time > resource.data.${createdDateSelector} +
  ${space3}duration.value(${rateLimitTime}, 's')
  ${space2}); 
${space2}}
`;

  return { rateLimitCall, rateLimitFunctionContent };
}
