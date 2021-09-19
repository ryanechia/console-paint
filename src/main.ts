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
