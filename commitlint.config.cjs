module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['Break', 'Feat', 'Fix']],
    'type-case': [0],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100],
  },
}
