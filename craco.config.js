const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    webpack: function (config) {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    "react/jsx-runtime": "react/jsx-runtime.js",
                    "react/jsx-dev-runtime": "react/jsx-dev-runtime.js"
                }
            }
        };
    }
};
