export function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function makeConstantText(input) {
  return input
    .split(/(?=[A-Z])/)
    .join("_")
    .toLocaleUpperCase();
}
