module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS'], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'jasmine' ], //use the mocha test framework
    files: [
      'testContext.js' //just load this file
    ],
    preprocessors: {
      'testContext.js': [ 'webpack', 'sourcemap']  //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'progress', 'html', 'coverage' ], //report results in this format
    coverageReporter: {
        type: 'html',
        dir: 'coverage/'
    },
    webpack: { //kind of a copy of your webpack config
      entry: 'testContext.js',
      devtool: 'inline-source-map',
      module: {
        rules: [
          { test: /\.js$/, loader: 'babel-loader' },
          {
            test: /\.js$/,
            enforce: 'post',
            exclude: /(test|node_modules|bower_components)\//,
            loader: 'istanbul-instrumenter'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
