module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['plugin:import/recommended', 'airbnb', 'eslint:recommended', 'react-app'],
    globals: {
        document: true,
        sinon: true,
        window: true,
        shallow: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalDecorators: true,
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['babel', 'import', 'jsx-a11y', 'react'],
    rules: {
        'comma-dangle': [
            'warn',
            {
                arrays: 'never',
                exports: 'ignore',
                functions: 'never',
                imports: 'ignore',
                objects: 'never'
            }
        ],
        'func-names': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        indent: [
            'error',
            4,
            {
                FunctionDeclaration: {
                    body: 1,
                    parameters: 3
                }
            }
        ],
        'key-spacing': [
            'error',
            {
                align: 'colon'
            }
        ],
        'no-console': 'warn',
        'no-template-curly-in-string': 'off',
        'no-undef': 'warn',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'warn',
        'prefer-rest-params': 'warn',
        'react/destructuring-assignment': [
            'warn',
            'always',
            {
                ignoreClassFields: true
            }
        ],
        'react/forbid-prop-types': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.js', '.jsx']
            }
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': 'off',
        'react/no-unused-prop-types': 'off',
        semi: 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                asyncArrow: 'ignore',
                named: 'never'
            }
        ],
        'valid-jsdoc': [
            'warn',
            {
                prefer: {
                    returns: 'return',
                    yield: 'yields'
                },
                preferType: {
                    Boolean: 'boolean',
                    Number: 'number',
                    String: 'string',
                    array: 'Array',
                    function: 'Function',
                    object: 'Object'
                },
                requireParamDescription: false,
                requireReturn: false,
                requireReturnDescription: false
            }
        ]
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['src', 'node_modules']
            }
        }
    }
};
