import path from "path"
import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"

export default function buildLoaders (): webpack.RuleSetRule[] {
    const scssLoder =
    {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
    }
    const typeScriptLoader =
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
       typeScriptLoader,
       scssLoder
    ]
}