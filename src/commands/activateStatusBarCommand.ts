import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem | undefined;

const updateStatusBar = () => {
  const config = vscode.workspace.getConfiguration();
  const isEnabled = config.get('keysound.enabled', true);

  if (!statusBarItem) {
    statusBarItem = vscode.window.createStatusBarItem('keysound', vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'keysound.enabled';
  }

  statusBarItem.text = isEnabled ? '🎼​' : '🔇';
  statusBarItem.tooltip = isEnabled ? 'Click to disable keysound' : 'Click to enable keysound';
  statusBarItem.show();
};

const activateStatusBarCommand = () => {
  updateStatusBar();

  vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration('keysound.enabled')) {
      updateStatusBar();
    }
  });
};

export default activateStatusBarCommand;
