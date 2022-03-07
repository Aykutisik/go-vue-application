module.exports = {
    preset: '@vue/cli-plugin-unit-jest',

    testMatch: [
        '<rootDir>/tests/contract/**/*.spec.js',
        '<rootDir>/tests/contract/**/*.spec.jsx',
        '<rootDir>/tests/unit/**/*.spec.js',
        '<rootDir>/tests/unit/**/*.spec.jsx',
    ]


}