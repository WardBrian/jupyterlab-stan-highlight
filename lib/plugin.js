import './stan'
import { INotebookTracker } from '@jupyterlab/notebook';
import { CodeCell } from '@jupyterlab/cells';

function registerStanFileType(app) {
  app.docRegistry.addFileType({
    name: 'stan',
    displayName: 'Stan',
    extensions: ['stan'],
    mimeTypes: ['text/x-stan'],
  });
}

function highlightStanCell(cell) {
  if (cell && cell instanceof CodeCell) {
    let editor = cell.editor;
    let header = editor.getLine(0)
    if (header?.trim().startsWith("%%stan")) {
      editor.setOption("mode", "text/x-stan");
      editor.setOption("indentUnit", 2);
      editor.setOption('firstLineNumber', 0);
      editor.setOption('lineNumbers', true);
    }
  }
}

export default [{
  id: 'jupyterlab-stan-highlight',
  autoStart: true,
  requires: [INotebookTracker],
  activate: function (app, tracker) {
    console.log('JupyterLab extension jupyterlab-stan-highlight is activated!');
    console.log(app.commands);
    registerStanFileType(app);

    tracker.currentChanged.connect((tr, nbPanel) => {
      nbPanel.revealed.then((r) => {
        nbPanel.content.widgets.forEach((cell, index, array) => {
          highlightStanCell(cell);
        });
      });
    });

    // highlight %%stan cells on click
    tracker.activeCellChanged.connect(() => {
      highlightStanCell(tracker.activeCell)
    });

    // highlight initally
    tracker.widgetAdded.connect((tr, nbPanel) => {
      nbPanel.revealed.then((r) => {
        nbPanel.content.widgets.forEach((cell, index, array) => {
          highlightStanCell(cell);
        });
      });
    });
  }
}];
