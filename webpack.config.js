const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { title } = require('process')

module.exports={
    // 入口
    entry:{
        main:path.join(__dirname,'./src/main.js'),
    },
    //服务器
    devServer:{
        contentBase:path.join(__dirname,'/public'),
        port:8080,
        // open:true, //自动打开浏览器
        compress:true,
        host:'0.0.0.0',// 允许外部访问
        historyApiFallback:true,
        // proxy:{
        //     '/nsg':{
        //         target:
        //     }
        // }
    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'src'),
            '#':path.join(__dirname,'src/components'),
            '~':path.join(__dirname,'src/views')
        }
    },
    // 加载器
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        //插件
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy: true}],
                            ['@babel/plugin-proposal-class-properties',{ "loose": true }],
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                              }]
                        ]
                    }
                }]
            },
            // CSS loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            // sass loader
            {
                test:/\.s[ac]ss$/,
                //增加编译速度
                // include:'./src',
                // exclude:'./node_module',
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./public/template.html'),
            title:'H5面试宝典'
        })
    ]
}