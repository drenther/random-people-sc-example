export const toTitleCase = text =>
  text
    .split('')
    .map((c, i) => (i === 0 ? c.toUpperCase() : c))
    .join('');

export const concatName = (...args) => args.map(toTitleCase).join(' ');
