module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'modules': false,
        'useBuiltIns': 'usage',
        'corejs': {
          'version': 3,
          'proposals': true
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  'plugins': [
    'transform-vue-jsx',
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-typescript',
  ],
  'env': {
    'test': {
      'plugins': [
        ['babel-plugin-istanbul']
      ]
    }
  }
}