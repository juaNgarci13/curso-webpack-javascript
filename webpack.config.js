// configuracion que vamos a realizar para el correcto funcionamiento
// de nuestro proyecto

// recurso principal, trabajo de configuraciones para nuestro proyecto

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    // Esta es la configuracion para establecer el punto de entraba 
    // de nuestra aplicación
    entry: './src/index.js',
    // Hacia donde vamos a enviar lo que va preparar webpack
    output: {
        // establecemos este páth para asi póder saber donde esta
        // nuestro proyecto y así poderlo utilizar
        path: path.resolve(__dirname, 'dist'),
        // Este "file" es un archivo resultante en el que se va a unificar todo
        // nuestro codigo
        filename: 'main.js'

    },
    // Ahora vamos a especificarle a webpack con que extenciones vamos a trabajar
    // en este proyecto
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // configuracion en donde vamos agregar una serie de elementos 
    module: {
        rules: [ //establecer unas reglas especificas para webpack
            {
                // este test nos ayuda a saber que tipo de extenciones vamos 
                // a utilizar
                test: /\.m?js$/,
                // este "exclude" dice que exculja y que no tome nada del node_module 
                exclude: /node_modules/,
                // esto hace que use el loader de la dependencia que instalamos de babel
                use: {
                    loader: 'babel-loader'
                }
            },
            { //configuracion del css para poder utilizarlo con webpack
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader']
            }
        ]
    },
    // incersion de los plugins para poder utilizar html con webpack
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
    ]

}