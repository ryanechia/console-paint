
let canvas: string[][];

function printCanvas(): void {
  canvas.forEach((row: string[]) => {
    let canvasRow = '';
    row.forEach((column: string) => {
      canvasRow += column;
    });
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
    });
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

// we shall assume x1 < x2 and y1 < y2
export const draw2DLine = (x1: number, y1: number, x2: number, y2: number): void => {
  try {
    if (!canvas) {
      throw 404;
    }

    const xRange = x2 - x1;
    const yRange = y2 - y1;

    if (!(xRange === 0 || yRange === 0)) {
      throw 707;
    }

    // range only needs to be adjusted for +1 by using <= since it is 0 indexed on a padded canvas
    if (xRange > 0 ) {
      for (let x = x1; x <= x2; x++) {
        canvas[y1][x] = 'x';
      }
    } else {
      // yRange > 0
      for (let y = y1; y <= y2; y++) {
        canvas[y][x1] = 'x';
      }
    }
    printCanvas();

  } catch (e) {
    switch (e) {
      case 404:
        console.warn('Canvas possibly not initialised');
        break;
      case 707:
        console.warn('Diagonal lines not supported');
        break;
    }
  }
};


// we shall assume x1 < x2 and y1 < y2
export const draw2DRect = (x1: number, y1: number, x2: number, y2: number): void => {
  try {
    if (!canvas) {
      throw 404;
    }

    // draw top line
    draw2DLine(x1, y1, x2, y1);
    // draw bottom line
    draw2DLine(x1, y2, x2, y2);
    // draw left line
    draw2DLine(x1, y1, x1, y2);
    // draw right line
    draw2DLine(x2, y1, x2, y2);
    printCanvas();

  } catch (e) {
    switch (e) {
      case 404:
        console.warn('Canvas possibly not initialised');
        break;
      case 707:
        console.warn('Diagonal lines not supported');
        break;
    }
  }
};
