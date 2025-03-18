module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      // NOTE: Common
      // [
      //   '✨ Feat',
      //   'Feat',
      //   '🐛 Fix',
      //   'Fix',
      //   '📝 Docs',
      //   'Docs',
      //   '🎨 Style',
      //   'Style',
      //   '♻️ Refactor',
      //   'Refactor',
      //   '⚡ Perf',
      //   'Perf',
      //   '✅ Test',
      //   'Test',
      //   '🔧 Chore',
      //   'Chore',
      //   '🔀 Merge',
      //   'Merge',
      //   '🚀 Release',
      //   'Release',
      // ],
      // NOTE: Version
      ['Break', 'Feat', 'Fix'],
    ],
    'type-case': [0],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100],
  },
}
