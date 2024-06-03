import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    javascript: true,
  },
  {
    // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', {
        order: [['template', 'script'], 'style'],
      }],
      'vue/html-self-closing': 'off',
      'no-console': 'off',
    },
  },
)
