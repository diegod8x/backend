module.exports = {
  'env': {
    'node': true,
    'es6': true,
    'es2021': true,
  },
  'extends': [
    'prettier'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
    'parser': 'prettier'
  },
  'plugins': [
    'prettier'
  ],
  'rules': {
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
        'singleQuote': true,
        'semi': false,
      }
    ],
  },
};
