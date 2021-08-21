# jupyterlab-stan-highlight

Jupyterlab extension to highlight Stan syntax. 
Modeled on the [VSCode grammar](https://github.com/ivan-bocharov/stan-vscode) and uses 
[stan-language-definitions](https://github.com/jrnold/stan-language-definitions)

Use it with [CmdStanJupyter](https://github.com/WardBrian/CmdStanJupyter) to recieve
highlighting for your `%%stan` blocks in python notebooks!


## Prerequisites

* JupyterLab

## Installation

To install the released version from [npm](https://www.npmjs.com/package/jupyterlab-stan-highlight):

```bash
jupyter labextension install jupyterlab-stan-highlight
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```
