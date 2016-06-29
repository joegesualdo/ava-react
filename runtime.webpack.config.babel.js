export default {
  output: {
    // YOU NEED TO SET libraryTarget: 'commonjs2'
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0', // Gives use access to propety initializers
          ],
        },
      },
      {
        test: /\.css$/,
        loaders: [
          // 'style',
          // If we want to use the style.className syntax:
          'css/locals?modules&importLoaders=1&localIdentName=[name]__[local]',
          // 'css?&sourceMap',
          'postcss-loader',
        ],
      },
    ]
  },
  postcss: function (webpack) {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require('postcss-cssnext')(),
      require('precss')(),
      require("postcss-color-function"),
    ];
  },
};
