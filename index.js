
module.exports = ({ addUtilities, variants, theme }) => {
  const spacing = theme('spacing', {});
  const ratio = 1.7;
  let css = {};

  delete spacing['0'];

  Object.keys(spacing).forEach(name => {
    let value = spacing[name];

    css[`.inset-space-${name}`] = { padding: `${value}` };
    css[`.inset-squish-space-${name}`] = {
      padding: `calc(${value} / ${ratio} - 1px) ${value} calc(${value} / ${ratio})`,
    };
    css[`.stack-space-${name}`] = {
      'margin-bottom': `${value}`,
      '&:last-child': {
        'margin-bottom': 0,
      },
    };
    css[`.inline-space-${name}`] = {
      'margin-right': `${value}`,
      '&:last-child': {
        'margin-right': 0,
      },
    };
  });

  addUtilities(css, variants('spacing', ['responsive']));
};
