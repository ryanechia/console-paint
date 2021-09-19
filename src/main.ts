import { createInterface } from 'readline';
import { DrawCanvasCommand } from './models/command.model';
import { initCanvas } from './services/easel.service';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function showHelp(): void {
  console.log(`
  Commands Supported (case-insensitive): \n
  Q                            Quit Program\n 
  H, Help                      Show Help\n 
  C <width> <height>           Create a new canvas of specified width and height.\n
  L <x1> <y1> <x2> <y2>        Create a new line from (x1,y1) to (x2,y2).\n
  R <x1> <y1> <x2> <y2>        Create a new rectangle from (x1,y1) to (x2,y2).\n
  B <x1> <y1> <fill-content>   Paint bucket fill on point (x1,y1) with specified <fill-content></fill-content>.\n
  `);
}

function drawCanvas(command: DrawCanvasCommand): void {
  initCanvas(command.rows, command.cols);
}

function parseUserInput(userInput: string): void {
  try {
    // check for types then validate the appropriate params
    const params: any[] = userInput.split(' ');
    // we only expect 5 tokens max
    if (params.length > 5 ) {
      const unsupportedArr: string[] = [];
      params.slice(5).forEach(
        (arg: string, index: number ) => unsupportedArr.push(` [${index+5}]: '${arg}'`)
      ); // 0-index'd, 6th item onward
      console.error(`Params ignored:${unsupportedArr}`);
      throw 45;
    }
    switch (params[0]) {
      case 'c': {
        const drawCommand: DrawCanvasCommand = {
          command: params[0],
          rows: parseInt(params[2]),
          cols: parseInt(params[1])
        };
        drawCanvas(drawCommand);
        break;
      }
      case 'l':
        break;
      case 'r':
        break;
      case 'b':
        break;
      default:
        console.error('Unsupported input, please enter again.\n\n');
        break;
    }
  } catch (error) {
    if (error === 45) {
      console.error('Unsupported input: More than 5 arguments detected.');
    }
    showHelp();
  }
}

function initLoop(): void {
  readline.question('Input command: ', function (userInput: string) {
      switch (userInput.toLocaleLowerCase()) {
        case 'q':
          console.log('Exiting Program');
          readline.close();
          break;
        case 'h':
        case 'help':
          showHelp();
          initLoop();
          break;
        default:
          parseUserInput(userInput);
          initLoop();
          break;
      }
  });
}

initLoop();
