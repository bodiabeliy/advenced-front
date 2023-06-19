import path from "path"
import webpack from "webpack"
import buildWebpackConfig from "./project_config/build/buildWebpackConfig"
import { BuildEnv, BuildPaths } from "./project_config/build/types/config"


export default (env:BuildEnv) => {
    // input Data
const paths:BuildPaths ={
    entry: path.resolve(__dirname, 'src', "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html")
}

const mode =env.mode || "development" 
const isDev = mode === "development"
const PORT =env.port || 3000

const config:webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port:PORT
})
    return config
}