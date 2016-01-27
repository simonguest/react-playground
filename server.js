import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

const PORT = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
})
  .listen(PORT, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log(`Listening at localhost:${PORT}`);
  });