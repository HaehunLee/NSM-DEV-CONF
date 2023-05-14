module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 16,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'next', // only nextjs
    'next/core-web-vitals', // only nextjs
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // always at the end
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    semi: ['error', 'always'], //세미콜론 적용 여부 => 무조건 세미콜론
    'react/no-unknown-property': ['error', { ignore: ['css'] }], // @emotion/css 사용 시 필요
    'linebreak-style': 0, //개행을 체크하는 옵션  Windows는 CRLF, Unix에선 LF를 사용한다.
    'react/react-in-jsx-scope': 0, // React 전역 선언 여부 0 : off => 선언안해도 됨.
    'react/prop-types': 0, //PropTypes 타입검사
    'no-unused-vars': 'off', // interface에 오류를 막기 위해 수정
    '@typescript-eslint/no-unused-vars': 1, // interface에 오류를 막기 위해 수정
    'no-useless-catch': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        jsxSingleQuote: true, // prettier jsx single quote 사용을 위한 세팅
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
