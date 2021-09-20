import { EaselApi } from './easel.api';
import { EaselService } from './easel.service';
import { drawCanvasCommandMock, fillCommandMock, lineCommandMock, rectangleCommandMock } from '../models/command.mocks';

describe('easel api init tests', function () {
  let easelApi: EaselApi;

  beforeEach(() => {
    easelApi = new EaselApi();
  });

  it('should exist', () => {
    expect(easelApi).toBeTruthy();
  });
});

describe('easel service init tests', function () {
  let easelApi: EaselApi;
  let easelService: EaselService;

  beforeEach(() => {
    easelApi = new EaselApi();
    easelService = new EaselService();
  });

  it('should call service getCanvas', () => {
    const getServiceSpy = jest.spyOn(easelService, 'getCanvas');
    easelApi.getCanvas();
    setTimeout(() => {
      expect(getServiceSpy).toHaveBeenCalled();
    }, 1000);
  });

  it('should call service drawCanvas', () => {
    const initServiceSpy = jest.spyOn(easelService, 'initCanvas');
    easelApi.drawCanvas(drawCanvasCommandMock);
    setTimeout(() => {
      expect(initServiceSpy).toHaveBeenCalledWith(drawCanvasCommandMock.rows, drawCanvasCommandMock. cols);
    }, 1000);
  });

  it('should call service draw2DLine', () => {
    const lineServiceSpy = jest.spyOn(easelService, 'draw2DLine');
    easelApi.drawLine(lineCommandMock);
    setTimeout(() => {
      expect(lineServiceSpy).toHaveBeenCalledWith(lineCommandMock.x1, lineCommandMock.y1, lineCommandMock.x2, lineCommandMock.y2);
    }, 1000);
  });

  it('should call service draw2DRect', () => {
    const rectServiceSpy = jest.spyOn(easelService, 'draw2DRect');
    easelApi.drawRect(rectangleCommandMock);
    setTimeout(() => {
      expect(rectServiceSpy).toHaveBeenCalledWith(rectangleCommandMock.x1, rectangleCommandMock.y1, rectangleCommandMock.x2, rectangleCommandMock.y2);
    }, 1000);
  });

  it('should call service fillSpaceAtWith', () => {
    const fillServiceSpy = jest.spyOn(easelService, 'fillSpaceAtWith');
    easelApi.bucketFill(fillCommandMock);
    setTimeout(() => {
      expect(fillServiceSpy).toHaveBeenCalledWith(fillCommandMock.x, fillCommandMock.y, fillCommandMock.fillWith);
    }, 1000);
  });
});
