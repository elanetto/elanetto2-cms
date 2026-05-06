import studio from '@sanity/eslint-config-studio'

export default [
  ...studio,
  {
    rules: {
      'no-console': 'off',
    },
    languageOptions: {
      globals: {
        console: 'readonly',
      },
    },
  },
]
