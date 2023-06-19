import path from "path"
import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"

export default function buildLoaders (): webpack.RuleSetRule[] {
    const typeScriptLoader =
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
       typeScriptLoader
    ]
}