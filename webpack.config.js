const { join } = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: join(__dirname, 'src', 'index.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'pipeAndGauge.js',
    library: 'pipeAndGauge',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  resolve: {
    extensions: ['.js']
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  optimization: {
    // namedModules: true, // NamedModulesPlugin()
    // splitChunks: { // CommonsChunkPlugin()
    //     name: 'vendor',
    //     minChunks: 2
    // },
    // // noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    concatenateModules: true // ModuleConcatenationPlugin
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  stats: {
    maxModules: Infinity,
    optimizationBailout: true
  }
};
