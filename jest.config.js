module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/*.spec.[jt]s?(x)'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
