import { createInterface, Interface } from 'readline';
import { DrawCanvasCommand, FillCommand, LineCommand, RectangleCommand } from './models/command.model';
import { EaselApi } from './services/easel.api';
import { Utils } from './utils';

export class Main {
  public readline: Interface;
  public easelApi: EaselApi;
  public utils: Utils;
  constructor() {
  this.readline = createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
  this.easelApi = new EaselApi();
  this.utils = new Utils();
  }

  public parseUserInput(userInput: string): void {
    try {
      // check for types then validate the appropriate params
      const params: string[] = userInput.split(' ');
      // we only expect 5 tokens max
      if (params.length > 5) {
        const unsupportedArr: string[] = [];
        params.slice(5).forEach(
          (arg: string, index: number) => unsupportedArr.push(` [${index + 5}]: '${arg}'`)
        ); // 0-index'd, 6th item onward
        console.error(`Params ignored:${unsupportedArr}`);
        this.utils.showHelp();
        throw 45;
      }
      switch (params[0]) {
        case 'ls':
          this.easelApi.getCanvas();
          break;
        case 'c': {
          if (params.length !== 3) {
            console.error('Required params format not met');
            this.utils.showHelp();
            break;
          }
          const drawCommand: DrawCanvasCommand = {
            command: params[0],
            rows: parseInt(params[2]),
            cols: parseInt(params[1])
          };
          this.easelApi.drawCanvas(drawCommand);
          break;
        }
        case 'l': {
          if (params.length !== 5) {
            console.error('Required params format not met');
            this.utils.showHelp();
            break;
          }
          const lineCommand: LineCommand = {
            command: params[0],
            x1: parseInt(params[1]),
            y1: parseInt(params[2]),
            x2: parseInt(params[3]),
            y2: parseInt(params[4]),
          };
          this.easelApi.drawLine(lineCommand);
          break;
        }
        case 'r': {
          if (params.length !== 5) {
            console.error('Required params format not met');
            this.utils.showHelp();
            break;
          }
          const rectangleCommand: RectangleCommand = {
            command: params[0],
            x1: parseInt(params[1]),
            y1: parseInt(params[2]),
            x2: parseInt(params[3]),
            y2: parseInt(params[4]),
          };
          this.easelApi.drawRect(rectangleCommand);
          break;
        }
        case 'b': {
          if (params.length !== 4) {
            console.error('Required params format not met');
            this.utils.showHelp();
            break;
          }
          const fillCommand: FillCommand = {
            command: params[0],
            x: parseInt(params[1]),
            y: parseInt(params[2]),
            fillWith: params[3].toString(),
          };
          this.easelApi.bucketFill(fillCommand);
          break;
        }
        case 'q':
          console.log('Exiting Program');
          this.readline.close();
          process.exit();
          break;
        case 'h':
        case 'help':
          this.utils.showHelp();
          this.askQuestion();
          break;
        default:
          console.error('Unsupported input, please enter again.\n\n');
          this.utils.showHelp();
          break;
      }
    } catch (error) {
      if (error === 45) {
        console.error('Unsupported input: More than 5 arguments detected.');
      }
      this.utils.showHelp();
    }
  }

  public askQuestion(): void {
    this.readline.question('Input command: ', (userInput: string) => {
        this.parseUserInput(userInput.toLocaleLowerCase());
        this.askQuestion();
    });
  }
}

function initLoop(): void {
  const main = new Main();
  main.askQuestion();
}

initLoop();
