import './stan'

export default [{
  id: 'jupyterlab-stan-highlight',
  autoStart: true,
  activate: function (app) {
    console.log('JupyterLab extension jupyterlab-stan-highlight is activated!');
    console.log(app.commands);
    registerStanFileType(app);
  }
}];

function registerStanFileType(app) {
  app.docRegistry.addFileType({
    name: 'stan',
    displayName: 'Stan',
    extensions: ['stan'],
    mimeTypes: ['text/x-stan'],
  });
}
