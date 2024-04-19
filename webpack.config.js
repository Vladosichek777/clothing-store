const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require('sass-loader');
const { optimize } = require('webpack');

module.exports = (env) => {
    return {
        mode:env.mode ?? 'development', // if we didn't set mode - use development on default
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
           path: path.resolve(__dirname, 'build'),
           filename: '[name][contenthash].js',
           assetModuleFilename: "assets/[name][ext]",
           clean: true // for update dist folder after changes (important)
        },
        devServer: {
          static : {
            directory:path.resolve(__dirname, 'build')
          },
          port:3000,
          hot:true
        },
         devtool:'source-map', //add source-map for debugging
         plugins : [
          new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') }), //for creating html web page. we can set a lot of options in this row, or use just created page
          new MiniCssExtractPlugin({ // for create a file style.css in build
              filename:'[name][contenthash].css'
          }),
      ],
        module: {
            rules:[
                { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }, //add typescript loader
                {test: /\.html$/i,loader: "html-loader",}, // add loader for looking changes in html file
                //for compiler sass in css (important)
                 { 
                    test: /\.(c|sa|sc)ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader, 
                        "css-loader",
                        { // this loader add prefix for old browsers
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions:{
                                    plugins: [require('postcss-preset-env')]
                                }
                            }
                        },
                        "sass-loader"
                        ],
                 },
                 // compile new code for old browsers(important)
                 { 
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [
                          ['@babel/preset-env', { targets: "defaults" }]
                        ]
                      }
                    }
                  },
                  //minimize size of images(important)
                  { 
                    test: /\.(gif|ico|png|jpe?g|svg)$/i,
                    use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          mozjpeg: {
                            progressive: true,
                          },
                          optipng: {
                            enabled: false,
                          },
                          pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          },
                          webp: {
                            quality: 75
                          }
                        }
                      },
                    ],
                  },
                  // work with fonts
                  {
                    test:/\.woff2?$/i,
                    type: 'asset/resource',
                    generator: {
                      filename: 'assets/fonts/[name][ext]'
                    }
                  },
                  //work with images
                  {
                    test:/\.(jpe?g|png|gif|svg)$/i,
                    type: 'asset/resource',
                    generator: {
                      filename: 'assets/images/[name][ext]'
                    }
                  },
                  //work with icons
                  {
                    test:/\.svg$/i,
                    type: 'asset/resource',
                    generator: {
                      filename: 'assets/icons/[name][ext]'
                    }
                  }
            ]
        },
        resolve : {
            extensions: ['.ts', '.js'] // We can not write extensions at the end of import file(important)
        },
    }
  }