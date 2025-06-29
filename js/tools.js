// Code ausführen
function runCode() {
  try {
    eval(Blockly.JavaScript.workspaceToCode(workspace));
  } catch (e) {
    console.error('Error when executing the code:', e);
    alert('Error when executing the code: ' + e.message);
  }
}

// Panel für Mobile umschalten
function togglePanel() {
  const panel = document.getElementById('blocklyArea');
  const toggleText = document.getElementById('toggleText');

  if (panel.classList.contains('panel-collapsed')) {
    panel.classList.remove('panel-collapsed');
    panel.classList.add('panel-expanded');
    toggleText.textContent = '🎮 Minimieren';
  } else if (panel.classList.contains('panel-expanded')) {
    panel.classList.remove('panel-expanded');
    panel.classList.add('panel-minimized');
    toggleText.textContent = '📝 Code Editor';
  } else {
    panel.classList.remove('panel-minimized');
    panel.classList.add('panel-expanded');
    toggleText.textContent = '🎮 Minimieren';
  }
}

// Responsive Panel-Handling
function handleResize() {
  const panel = document.getElementById('blocklyArea');
  if (window.innerWidth >= 768) {
    panel.className = 'blockly-area panel-expanded';
  }
}

// Warten bis Blockly vollständig geladen ist
function waitForBlockly() {
  if (typeof Blockly !== 'undefined' && Blockly.Blocks && Blockly.JavaScript) {
    initBlockly();
    handleResize();
  } else {
    setTimeout(waitForBlockly, 100);
  }
}

// Initialisierung
window.addEventListener('load', function() {
  waitForBlockly();
});

window.addEventListener('resize', handleResize);