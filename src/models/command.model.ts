export interface ICommand {
  command: string
}

export interface DrawCanvasCommand extends ICommand{
  rows: number,
  cols: number
}

export interface LineCommand extends ICommand{
  x1: number,
  x2: number,
  y1: number,
  y2: number
}

export interface RectangleCommand extends ICommand{
  x1: number,
  x2: number,
  y1: number,
  y2: number
}

export interface FillCommand extends ICommand{
  x: number,
  y: number,
  fillWith: string,
}
