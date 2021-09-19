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
        default:
          showHelp();
          initLoop();
          break;
      }
  });
}

initLoop();
