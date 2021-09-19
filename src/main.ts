import { createInterface } from 'readline';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

function showHelp(): void {
  console.log(`
  Commands Supported: \n
  Q, q                       Quit Program\n 
  H, h, Help, help           Quit Program\n 
  `);
}

function parseUserInput(userInput: string): void {
  // check for types then validate the appropriate params
  const commands: any[] = userInput.split(' ');
  switch (commands[0]) {
    case 'c':
    case 'C':
      break;
    case 'l':
    case 'L':
      break;
    case 'r':
    case 'R':
      break;
    default:
      console.error('Unsupported input');
      showHelp();
  }
}

function initLoop(): void {
  readline.question('Input command: ', function (userInput: string) {
      switch (userInput) {
        case 'q':
        case 'Q':
          console.log('Exiting Program');
          readline.close();
          break;
        case 'h':
        case 'H':
        case 'Help':
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
