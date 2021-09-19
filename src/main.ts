import { createInterface } from 'readline';
import { DrawCanvasCommand, FillCommand, LineCommand, RectangleCommand } from './models/command.model';
import {
  getCanvas,
} from './services/easel.service';
import { bucketFill, drawCanvas, drawLine, drawRect } from './services/easel.api';
import { showHelp } from './utils';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

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
      case 'ls':
        getCanvas();
        break;
      case 'c': {
        const drawCommand: DrawCanvasCommand = {
          command: params[0],
          rows: parseInt(params[2]),
          cols: parseInt(params[1])
        };
        drawCanvas(drawCommand);
        break;
      }
      case 'l': {
        const lineCommand: LineCommand = {
          command: params[0],
          x1: parseInt(params[1]),
          y1: parseInt(params[2]),
          x2: parseInt(params[3]),
          y2: parseInt(params[4]),
        };
        drawLine(lineCommand);
        break;
      }
      case 'r':
      {
        const rectangleCommand: RectangleCommand = {
          command: params[0],
          x1: parseInt(params[1]),
          y1: parseInt(params[2]),
          x2: parseInt(params[3]),
          y2: parseInt(params[4]),
        };
        drawRect(rectangleCommand);
        break;
      }
      case 'b':
      {
        const fillCommand: FillCommand = {
          command: params[0],
          x: parseInt(params[1]),
          y: parseInt(params[2]),
          fillWith: params[3].toString(),
        };
        bucketFill(fillCommand);
        break;
      }
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
