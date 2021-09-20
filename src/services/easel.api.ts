import { DrawCanvasCommand, FillCommand, LineCommand, RectangleCommand } from '../models/command.model';
import { EaselService } from './easel.service';

export class EaselApi {
  private easelService;
  constructor() {
    this.easelService = new EaselService();
  }

  public getCanvas(): string[][] | undefined {
    return this.easelService.getCanvas();
  }

  public drawCanvas(command: DrawCanvasCommand): void {
    this.easelService.initCanvas(command.rows, command.cols);
  }

  public drawLine(command: LineCommand): void {
    this.easelService.draw2DLine(command.x1, command.y1, command.x2, command.y2);
  }

  public drawRect(command: RectangleCommand): void {
    this.easelService.draw2DRect(command.x1, command.y1, command.x2, command.y2);
  }

  public bucketFill(command: FillCommand): void {
    this.easelService.fillSpaceAtWith(command.x, command.y, command.fillWith);
  }
}
