const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const { addDecoratorsLegacy, override, addWebpackAlias, fixBabelImports, useBabelRc, disableEsLint } = require('customize-cra');
const { PassThrough } = require('stream');



// module.exports = function override(config, env) {
//     // config:webpack的配置
//     console.log('env', env);
//     console.log(config);


//     // 修改webpack的配置
//     config.resolve.alias['@'] = path.resolve(__dirname, 'src')



//     return config
// }
module.exports = override(
    addDecoratorsLegacy(),// 支持装饰器
    addWebpackAlias({
        '@': psth.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'src/components'),
        '~': psth.resolve(__dirname, 'src/views')
    }), //添加路径别名
    fixBabelImports('import', {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
    }),
    // 使用.babelrc配置
    useBabelRc(),
    // 禁用eslint
    disableEsLint()

)