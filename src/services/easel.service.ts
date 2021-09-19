let canvas: number[][];

export const initCanvas = (rows: number, columns: number): void => {
  console.log(rows);
  console.log(columns);
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
