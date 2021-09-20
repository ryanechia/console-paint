import { Main } from './main';
import { Utils } from './utils';
import { EaselApi } from './services/easel.api';

describe('main init tests', function () {
  let main: Main;

  beforeEach(() => {
    main = new Main();
  });

  it('should exist as a class', () => {
    expect(main).toBeTruthy();
  });
});

describe('parseUserInput tests', function () {
  let main: Main;
  let utils: Utils;
  let easelApi: EaselApi;

  beforeEach(() => {
    main = new Main();
    utils = new Utils();
    easelApi = new EaselApi();
  });

  it('should call the getCanvas API function when ls is entered', () => {
    const getCanvasSpy = jest.spyOn(easelApi, 'getCanvas');
    main.parseUserInput('ls');
    setTimeout(() => {
      expect(getCanvasSpy).toHaveBeenCalled();
    },1000);
  });

  it('parseUserInput for inputs that are too long should error and show help', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const apiDrawCanvasSpy = jest.spyOn(easelApi, 'drawCanvas');
    const helpSpy = jest.spyOn(utils, 'showHelp');
    main.parseUserInput('c 2 3 4 5 6');
    setTimeout(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(helpSpy).toHaveBeenCalledTimes(1);
      expect(apiDrawCanvasSpy).toHaveBeenCalledTimes(0);
    },1000);
  });

  it('parseUserInput for invalid canvas commands', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const apiDrawCanvasSpy = jest.spyOn(easelApi, 'drawCanvas');
    const showHelpSpy = jest.spyOn(utils,'showHelp');
    main.parseUserInput('c');
    setTimeout(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(showHelpSpy).toHaveBeenCalledTimes(1);
      expect(apiDrawCanvasSpy).toHaveBeenCalledTimes(0);
    },1000);
  });

  it('parseUserInput for valid canvas commands', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const apiDrawCanvasSpy = jest.spyOn(easelApi, 'drawCanvas');
    main.parseUserInput('c 1 1');
    setTimeout(() => {
      expect(consoleLogSpy).toHaveBeenCalled();
      expect(apiDrawCanvasSpy).toHaveBeenCalledTimes(1);
    },1000);
  });

  it('parseUserInput for valid line commands', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const apiLineSpy = jest.spyOn(easelApi, 'drawLine');

    main.parseUserInput('l 1 1');
    setTimeout(() => {
      expect(consoleLogSpy).toHaveBeenCalled();
      expect(apiLineSpy).toHaveBeenCalledTimes(1);
    },1000);
  });

  it('parseUserInput for valid rect commands', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const apiRectSpy = jest.spyOn(easelApi, 'drawRect');

    main.parseUserInput('r 1 1 4 5');
    setTimeout(() => {
      expect(consoleLogSpy).toHaveBeenCalled();
      expect(apiRectSpy).toHaveBeenCalledTimes(1);
    },1000);
  });

  it('parseUserInput for valid bucket commands', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const apiBucketSpy = jest.spyOn(easelApi, 'bucketFill');

    main.parseUserInput('b 3 3 o');
    setTimeout(() => {
      expect(consoleLogSpy).toHaveBeenCalled();
      expect(apiBucketSpy).toHaveBeenCalledTimes(1);
    },1000);
  });

  it('parseUserInput for invalid bucket fill', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const apiBucketSpy = jest.spyOn(easelApi, 'bucketFill');

    main.parseUserInput('b 3 3 osd');
    setTimeout(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(apiBucketSpy).toHaveBeenCalledTimes(0);
    },1000);
  });

  it('parseUserInput for quitting program', () => {
    const processExitSpy = jest.spyOn(process, 'exit').mockImplementation();
    main.parseUserInput('q');
    setTimeout(() => {
      expect(main.readline.close()).toHaveBeenCalled();
      expect(processExitSpy).toHaveBeenCalled();
    },1000);
  });

  it('should show help when h is entered', () => {
    const helpSpy = jest.spyOn(utils, 'showHelp');
    main.parseUserInput('h');
    main.parseUserInput('help');
    setTimeout(() => {
      expect(helpSpy).toHaveBeenCalledTimes(2);
    },1000);
  });

  it('parseUserInput for unknown input', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const showHelpSpy = jest.spyOn(utils,'showHelp');
    main.parseUserInput('dfgdfgdfg');
    setTimeout(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(showHelpSpy).toHaveBeenCalledTimes(1);
    },1000);
  });
});
