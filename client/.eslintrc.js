module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
  ],
  rules: {
    'react/prop-types': 0,
    // 'linebreak-style': 0,
    indent: 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true, 'allowTemplateLiterals': false }
    ],
    'quotes': [2, 'single', {'avoidEscape':  true}],
    // 'quotes': ['single'],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'max-len': ['error', { 'code': 140 }],
    'no-param-reassign': 0,
    'prettier/prettier': [2,{
     'endOfLine':'auto',
   }],
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': [1, { 'forbid': ['any', 'array'] }],
    'react/jsx-curly-newline': 0,
    'react/jsx-indent': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/state-in-constructor': [1, 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0
  },
};
