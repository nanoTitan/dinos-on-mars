const Dotenv = require("dotenv-webpack");

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Add the new plugin to the existing webpack plugins
        config.plugins.push(new Dotenv({ silent: true }));
        return config;
    },
    env: {
        MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID,
        MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY
    },
}