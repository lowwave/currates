export const base = {
  borderRadius: '4px',
  breakpoints: {
    lg: '75em',
    md: '62em',
    sm: '48em',
    xl: '88em',
  },
  fontSize: {
    lg: '1.125rem',
    md: '1rem',
    sm: '0.875rem',
    xl: '1.25rem',
  },
  inputHeight: '2.25rem',
  lineHeights: {
    lg: '1.6',
    md: '1.55',
    sm: '1.45',
    xl: '1.65',
  },
};

export const light = {
  ...base,
  colors: {
    background: '#fff',
    backgroundElevated: '#f8f9fa',
    border: '#ced4da',
    error: '#f03e3e',
    input: '#fff',
    primary: '#5c7cfa',
    skeleton: '#ced4da',
    text: '#343a40',
    textDisabled: '#e9ecef',
  },
};

export const dark = {
  ...base,
  colors: {
    background: '#212529',
    backgroundElevated: '#343a40',
    border: '#495057',
    error: '#f03e3e',
    input: '#495057',
    primary: '#5c7cfa',
    skeleton: '#495057',
    text: '#f8f9fa',
    textDisabled: '#e9ecef',
  },
};
