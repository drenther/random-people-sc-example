export const theme = {
  color: {
    primary: '#5755d9',
    secondary: '#f1f1fc',
    dark: '#454d5d',
    light: '#f8f9fa',
  },
  fontSize: {
    hg: '32px',
    md: '24px',
    sm: '18px',
    tn: '14px',
  },
};

export const invertTheme = ({
  color: { primary, secondary, dark, light },
  ...rest
}) => ({
  color: {
    primary: secondary,
    secondary: primary,
    dark: light,
    light: dark,
  },
  ...rest,
});

export const getFontSize = size => props => props.theme.fontSize[size];
export const getColor = color => props => props.theme.color[color];
