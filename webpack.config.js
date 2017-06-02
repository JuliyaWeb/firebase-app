var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  entry: {
    styles: [
      './resources/themes/gentelella/vendors/bootstrap/dist/css/bootstrap.css',
      './resources/themes/gentelella//vendors/font-awesome/css/font-awesome.min.css',
      './resources/themes/gentelella/build/css/custom.css',
      './resources/sass/global.scss'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/dist'),
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [require('autoprefixer')];
                },
              },
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: "file-loader",
        query: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        query: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        query: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
    }),
  ]
};
