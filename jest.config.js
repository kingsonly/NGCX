/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    testEnvironment: 'node',
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/filesMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },

    "moduleDirectories": [
        "node_modules",
        "src"
    ]
};