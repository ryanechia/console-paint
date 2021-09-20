import { DrawCanvasCommand, FillCommand, LineCommand, RectangleCommand } from './command.model';

const drawCanvasCommandMock: DrawCanvasCommand = {
  command: 'c',
  rows: 4,
  cols: 20
};
const lineCommandMock: LineCommand = {
  command: 'l',
  x1: 1,
  y1: 2,
  x2: 6,
  y2: 2
};
const retangleCommandMock: RectangleCommand = {
  command: 'r',
  x1: 14,
  y1: 1,
  x2: 18,
  y2: 3
};
const fillCommandMock: FillCommand = {
  command: 'b',
  x: 1,
  y: 2,
  fillWith: 'o'
};
