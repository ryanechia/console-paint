
let canvas: string[][];

function printCanvas(): void {
  canvas.forEach((row: string[]) => {
    let canvasRow = '';
    row.forEach((column: string) => {
      canvasRow += column;
    })
    console.log(canvasRow);
  });
}

export const initCanvas = (rows: number, columns: number): void => {
  console.log(`rows: ${rows}`);
  console.log(`columns: ${columns}`);

  // pad by 2 to make room for the border
  canvas = new Array(rows+2).fill(' ')
    .map(()=> new Array(columns+2).fill(' '));

  // draw the canvas border
  canvas.forEach((row: string[], rowIndex: number) => {
    row.forEach((column: string, colIndex: number) => {
      if (colIndex === 0 || colIndex === row.length - 1 ) {
        canvas[rowIndex][colIndex] = '|';
      }
      if (rowIndex === 0 || rowIndex === canvas.length - 1 ) {
        canvas[rowIndex][colIndex] = '-';
      }
    })
  });
  printCanvas();
};

export const getCanvas = ():  number[][] | undefined => {
  try {
    if (!canvas) {
      throw 'Canvas undefined';
    }
    return canvas;
  } catch (e) {
    console.warn('Canvas possibly not initialised');
  }
  return undefined;
};

export const setCanvas = (): void => {
  try {
    if (!canvas) {
      throw 'Canvas undefined';
    }
  } catch (e) {
    console.warn('Canvas possibly not initialised');
  }
};
