import { DrawCanvasCommand, FillCommand, LineCommand, RectangleCommand } from '../models/command.model';
import {
  draw2DLine as easelDrawLine,
  draw2DRect as easelDrawRect,
  fillSpaceAtWith as easelFillColour,
  initCanvas
} from './easel.service';

export function drawCanvas(command: DrawCanvasCommand): void {
  initCanvas(command.rows, command.cols);
}

export function drawLine(command: LineCommand): void {
  easelDrawLine(command.x1, command.y1, command.x2, command.y2);
}

export function drawRect(command: RectangleCommand): void {
  easelDrawRect(command.x1, command.y1, command.x2, command.y2);
}

export function bucketFill(command: FillCommand): void {
  easelFillColour(command.x, command.y, command.fillWith);
}
