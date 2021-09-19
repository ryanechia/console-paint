import { createInterface } from 'readline';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

function initLoop(): void {
  readline.question('Input command: ', function (userInput: string) {
        switch (userInput) {
          case 'q':
          case 'Q':
            console.log('Exiting Program');
            readline.close();
            break;
          default:
            initLoop();
        }
  });
}

initLoop();
