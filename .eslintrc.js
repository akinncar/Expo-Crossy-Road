module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  env: {
    jasmine: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],

    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'new-cap': 'off',
    'no-plusplus': 'off',
    'no-class-assign': 'off',
    'no-duplicate-imports': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    'react/jsx-filename-extension': ['off', { extensions: ['.js', '.jsx'] }],

    'react/sort-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-deprecated': 'off',

    'react/forbid-prop-types': 'warn',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
};
