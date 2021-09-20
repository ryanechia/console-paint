import { DrawCanvasCommand, FillCommand, LineCommand, RectangleCommand } from '../models/command.model';
import {
  draw2DLine as easelDrawLine,
  draw2DRect as easelDrawRect,
  fillSpaceAtWith as easelFillColour,
  initCanvas
} from './easel.service';

export class EaselApi {
  public drawCanvas(command: DrawCanvasCommand): void {
    initCanvas(command.rows, command.cols);
  }

  public drawLine(command: LineCommand): void {
    easelDrawLine(command.x1, command.y1, command.x2, command.y2);
  }

  public drawRect(command: RectangleCommand): void {
    easelDrawRect(command.x1, command.y1, command.x2, command.y2);
  }

  public bucketFill(command: FillCommand): void {
    easelFillColour(command.x, command.y, command.fillWith);
  }
}
