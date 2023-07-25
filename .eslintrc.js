module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'google',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json', 'tsconfig.dev.json'],
        sourceType: 'module',
    },
    ignorePatterns: [
        '/lib/**/*', // Ignore built files.
    ],
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    rules: {
        'import/no-unresolved': 0,
        'max-len': ['warn', 150],
        'require-jsdoc': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'prefer-const': 1,
        'no-prototype-builtins': 1,
    },
};
