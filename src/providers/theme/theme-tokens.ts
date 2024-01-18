export const base = {
  fontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  lineHeights: {
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  breakpoints: {
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  borderRadius: '4px',
  inputHeight: '2.25rem',
};

export const light = {
  ...base,
  colors: {
    background: '#fff',
    backgroundElevated: '#f8f9fa',
    primary: '#5c7cfa',
    error: '#f03e3e',
    text: '#343a40',
    textDisabled: '#e9ecef',
    border: '#ced4da',
    input: '#fff',
  },
};

export const dark = {
  ...base,
  colors: {
    background: '#212529',
    backgroundElevated: '#343a40',
    primary: '#5c7cfa',
    error: '#f03e3e',
    text: '#f8f9fa',
    textDisabled: '#e9ecef',
    border: '#495057',
    input: '#495057',
  },
};
