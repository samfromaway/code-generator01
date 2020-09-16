export const TYPES = [
  'string',
  'number',
  'boolean',
  'object',
  'array',
  'timestamp',
];

export const RANGE_TYPES = [
  { value: 'equal', label: '(==) Equal', symbol: '' },
  { value: 'notEqual', label: '(!=) Not Equal' },
  { value: 'lessThan', label: '(<) Less Than' },
  { value: 'lessThanOrEqualTo', label: '(<=) Less Than Or Equal To' },
  { value: 'greaterThan', label: '(>) Greater Than' },
  { value: 'greaterThanOrEqualTo', label: '(>=) Greater Than Or Equal To' },
  { value: 'between', label: '(=> <=)Between' },
];
export const REDUCED_RANGE_TYPES = [
  { value: 'equal', label: '(==) Equal' },
  { value: 'notEqual', label: '(!=) Not Equal' },
];
