import { EaselService } from './easel.service';

describe('easel service init tests', function () {
  let easelService: EaselService;

  beforeEach(() => {
    easelService = new EaselService();
  });

  it('should exist', () => {
    expect(easelService).toBeTruthy();
  });

  it('should show error if canvas does not exist', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    easelService.getCanvas();
    setTimeout(() => {
      expect(easelService.getCanvas()).toThrow('404');
      expect(easelService.getCanvas()).toBe(undefined);
      expect(consoleWarnSpy).toHaveBeenCalled();
      expect(easelService.printCanvas()).toHaveBeenCalledTimes(0);
    }, 1000);
  });


  it('should be able to init a canvas', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const getCanvasSpy = jest.spyOn(easelService, 'getCanvas');
    easelService.initCanvas(5, 3);
    setTimeout(() => {
      expect(getCanvasSpy).toBeTruthy();
      expect(easelService.canvas).toBe([
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ]
      ]);
      expect(consoleLogSpy).toHaveBeenCalled();
    }, 1000);
  });
});

describe('easel service tests', function () {
  let easelService: EaselService;

  beforeEach(() => {
    easelService = new EaselService();
    easelService.initCanvas(5, 5);
  });

  it('should be able to retrieve the canvas', () => {
    const printCanvasSpy = jest.spyOn(easelService, 'printCanvas');
    setTimeout(() => {
      expect(easelService.getCanvas().length).toBeGreaterThan(0);
      expect(easelService.getCanvas()).toStrictEqual([
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ]
      ]);
      expect(printCanvasSpy).toBeTruthy();
    }, 1000);
  });

  it('should be able to draw a line', () => {
    const printCanvasSpy = jest.spyOn(easelService, 'printCanvas');
    easelService.draw2DLine(1, 2, 4, 2, false);
    setTimeout(() => {
      expect(easelService.canvas).toStrictEqual([
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', 'x', 'x',
          'x', 'x', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ]
      ]);
      expect(printCanvasSpy).toHaveBeenCalledTimes(0);
    }, 1000);
  });

  it('should be able to print out the drawn line', () => {
    const printCanvasSpy = jest.spyOn(easelService, 'printCanvas');
    easelService.draw2DLine(1, 2, 4, 2, true);
    setTimeout(() => {
      expect(easelService.canvas).toStrictEqual([
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', 'x', 'x',
          'x', 'x', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ]
      ]);
      expect(printCanvasSpy).toHaveBeenCalledTimes(1);
    }, 1000);
  });
  it('should not be able to draw diagonal line', () => {
    const printCanvasSpy = jest.spyOn(easelService, 'printCanvas');
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    easelService.draw2DLine(1, 2, 4, 4, true);
    setTimeout(() => {
      expect(easelService.draw2DLine(1, 2, 4, 4, true)).toThrow('707');
      expect(printCanvasSpy).toHaveBeenCalledTimes(0);
      expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    }, 1000);
  });

  it('should be able to draw a rectangle', () => {
    const printCanvasSpy = jest.spyOn(easelService, 'printCanvas');
    easelService.draw2DRect(1, 2, 4, 4);
    setTimeout(() => {
      expect(easelService.getCanvas()).toStrictEqual([
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '|', 'x', 'x',
          'x', 'x', ' ',
          '|'
        ],
        [
          '|', 'x', ' ',
          ' ', 'x', ' ',
          '|'
        ],
        [
          '|', 'x', 'x',
          'x', 'x', ' ',
          '|'
        ],
        [
          '|', ' ', ' ',
          ' ', ' ', ' ',
          '|'
        ],
        [
          '-', '-', '-',
          '-', '-', '-',
          '-'
        ]
      ]);
      expect(printCanvasSpy).toHaveBeenCalledTimes(1);
    }, 1000);
  });

  it('should be able to floodfill', () => {
    const printCanvasSpy = jest.spyOn(easelService, 'printCanvas');
    const algorithmSpy = jest.spyOn(easelService, 'stackFloodFill');
    easelService.fillSpaceAtWith(3, 3, 'o');
    setTimeout(() => {
      expect(algorithmSpy).toHaveBeenCalledWith(3, 3, ' ', 'o');
      expect(printCanvasSpy).toHaveBeenCalledTimes(1);
    }, 1000);
  });


  it('floodfill should cancel when colour is the same', () => {
    const printCanvasSpy = jest.spyOn(easelService, 'printCanvas');
    const algorithmSpy = jest.spyOn(easelService, 'stackFloodFill');
    easelService.fillSpaceAtWith(3, 3, ' ');
    setTimeout(() => {
      expect(algorithmSpy).toHaveBeenCalledWith(3, 3, ' ', ' ');
      expect(printCanvasSpy).toHaveBeenCalledTimes(1);
      expect(easelService.fillSpaceAtWith(3, 3, ' ')).toThrow('422');
    }, 1000);
  });
});
