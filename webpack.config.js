const path = require("path")

module.exports = {
    entry: "./src/App.tsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            },
        ],
    },
    mode: "development",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "static"),
        open: true,
        port: 3000,
    },
}
