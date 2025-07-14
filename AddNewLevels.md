# Instructions to add a new level / exercise

Follow these instructions to add a new level / exercise:

1. copy the "[text_blocks.html](text_blocks.html)" file
2. give it a senseful name like "mission_01_20.html"
3. the first number (mission_**01**) represents the general topic like "text blocks"
4. the second number (mission_01_**20**) represents a subtopic like "print", "join", etc.
5. every subtopic should have a max of 10 exercises
6. write a descriptive title on line 4:
    ```html
   <head>
      <title>Mission 01_20 - Drag, connect, type & execute</title>
    ... 
    ```
7. add your instructions in the "level-title" section after line 18:
    ```html
    <ol class="level-title">
      <li>This file contains all "text" blocks.</li>
      <li>Remove unnecessarry blocks.</li>
      <li>Add your instructions here.</li>
      ...
    ```
8. The initial Toolbox XML definition starts at line 47.  
It contains all possible text blocks.   
Remove the ones that you don't need. 
    ```javascript
    function initBlockly() {
    blocklyOptions.toolbox = `
      <xml>
        <block type="text_print"></block>
        <block type="text_create_join_container"></block>
        ...
    ```
9. If you need initial blocks in your workspace, modify the XML beginning from line 62:
    ```javascript
    let startBlocks = `
      <xml>
        <block type="text_print" x="70" y="70">
          <value name="TEXT">
            <shadow type="text_join">
            ...
    ```
10. Last but not least, implement the function that checks the proper result beginning from line 85.  
    If an error occurs, `return null`.  
    Otherwise, display a success message and forward to the next exercise.  
    Here is an example for the "text_print" block:
    ```javascript
    Blockly.JavaScript['text_print'] = function (block) {
      let msg = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "''"
      if (msg == "'Hello, ' + 'Agent Cipher'") {
        msg += '\nWelcome, Agent Cipher!'
        // forward to next level
        forward('mission_02.html')
      } else {
        msg = (msg == "''") ? 'Enter a password...' : msg + '\nWrong password! Try again...'
      }
      cout(msg)
      return null
    }
    ```
 