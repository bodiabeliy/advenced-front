
import path from "path"
import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack, { WebpackPluginInstance } from "webpack"
import { BuildOptions } from "./types/config"


export default function buildPlugins({paths}:BuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template:paths.html
        }),
        new webpack.ProgressPlugin()
    ]
} 
