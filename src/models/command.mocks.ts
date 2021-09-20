import { DrawCanvasCommand, FillCommand, LineCommand, RectangleCommand } from './command.model';

export const drawCanvasCommandMock: DrawCanvasCommand = {
  command: 'c',
  rows: 4,
  cols: 20
};
export const lineCommandMock: LineCommand = {
  command: 'l',
  x1: 1,
  y1: 2,
  x2: 6,
  y2: 2
};
export const rectangleCommandMock: RectangleCommand = {
  command: 'r',
  x1: 14,
  y1: 1,
  x2: 18,
  y2: 3
};
export const fillCommandMock: FillCommand = {
  command: 'b',
  x: 1,
  y: 2,
  fillWith: 'o'
};
