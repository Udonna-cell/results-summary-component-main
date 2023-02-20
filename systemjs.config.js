SystemJS.config({
    baseURL: '/',
    defaultExtension: false,
    packages: {
        "/": "js"
    },
    meta: {
        '*.js': {
            'babelOptions': {
                react: true
            }
        },
        '*.jsx': {
            'babelOptions': {
              react: true
            }
        },
        '*.css': {
            loader: 'css'
        },
    },
    map: {
        'plugin-babel': 'modules/systemjs-plugin-babel.min.js',
        'systemjs-babel-build': 'modules/systemjs-babel-browser.min.js',
        'react': 'modules/react.production.min.js',
        'react-dom': 'modules/react-dom.production.min.js',
        'react-router': 'modules/react-router.production.min.js',
        'react-router-dom': 'modules/react-router-dom.production.min.js',
        'history': 'modules/history.production.min.js',
        'css': 'modules/systemjs-plugin-css.min.js'
    },
    transpiler: 'plugin-babel'
});

SystemJS.import('./index.js')
.catch(console.error.bind(console));