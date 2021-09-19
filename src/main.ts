import { createInterface } from 'readline';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function showHelp(): void {
  console.log(`
  Commands Supported: \n
  Q                            Quit Program\n 
  H, Help                      Show Help\n 
  C <width> <height>           Create a new canvas of specified width and height.\n
  L <x1> <y1> <x2> <y2>        Create a new line from (x1,y1) to (x2,y2).\n
  R <x1> <y1> <x2> <y2>        Create a new rectangle from (x1,y1) to (x2,y2).\n
  B <x1> <y1> <fill-content>   Paint bucket fill on point (x1,y1) with specified <fill-content></fill-content>.\n
  `);
}

function parseUserInput(userInput: string): void {
  // check for types then validate the appropriate params
  const commands: any[] = userInput.split(' ');
  switch (commands[0]) {
    case 'c':
      break;
    case 'l':
      break;
    case 'r':
      break;
    default:
      console.error('Unsupported input');
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
