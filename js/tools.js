let workspace

const blocklyOptions = {
  zoom: {
    controls: true,
    startScale: 1.0,
    maxScale: 1.5,
    minScale: 0.7,
    scaleSpeed: 1.2
  },
  trashcan: true,
  sounds: true,
  grid: {
    spacing: 20,
    length: 3,
    colour: '#00ff00',
    snap: true
  },
  horizontalLayout: true,
  // toolboxPosition: 'start'
}

// Code ausführen
function runCode() {
  const topBlocks = workspace.getTopBlocks(false)
  if (topBlocks.length === 0) {
    cout('[Error] No code to execute!')
  } else {
    try {
      eval(Blockly.JavaScript.workspaceToCode(workspace))
    } catch (e) {
      console.error('Error when executing the code:', e)
      cout('Error when executing the code:\n' + e.message)
    }
  }
}

// Responsive Panel-Handling
function handleResize() {
  const panel = document.getElementById('blocklyArea')
  if (window.innerWidth >= 768) {
    panel.className = 'blockly-area panel-expanded'
  }
}

// Warten bis Blockly vollständig geladen ist
function waitForBlockly() {
  if (typeof Blockly !== 'undefined' && Blockly.Blocks && Blockly.JavaScript) {
    initBlockly()
    handleResize()
  } else {
    setTimeout(waitForBlockly, 100)
  }
}

function cout(msg) {
  const consoleOut = document.getElementById('console')
  if (consoleOut) {
    consoleOut.textContent = msg + '\n'
    consoleOut.scrollTop = consoleOut.scrollHeight
  }
}

function forward(url) {
  setTimeout(() => {
    location.href = url
  }, 4000)
}

// Initialisierung
window.addEventListener('load', function () {
  waitForBlockly()
})

window.addEventListener('resize', handleResize)