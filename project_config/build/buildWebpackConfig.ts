import { BuildOptions } from "./types/config";
import path from "path"
import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import Plugins from '../../project_config/build/buildPlugins'
import Loaders from "../../project_config/build/buildLoaders"
import Resolvers from "../../project_config/build/buildResolvers"
import buildWebpackDevServer from "./buildWebpackDevServer";


export default function buildWebpackConfig(options:BuildOptions):webpack.Configuration {

    const {paths, mode, isDev} = options
    return {
        mode:mode,
        entry:paths.entry,
        module: {
            rules: Loaders(),
        },
        resolve: Resolvers(),
        output: {
            filename:"[name].[contenthash].js",
            path: paths.build,
            clean:true
        },
        plugins:Plugins(options),
        devtool: isDev?'inline-source-map':undefined,
        devServer:isDev? buildWebpackDevServer(options): undefined
    }
}