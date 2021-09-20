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

  it('should show help when h is entered', () => {
    const helpSpy = jest.spyOn(utils, 'showHelp');
    main.parseUserInput('h');
    setTimeout(() => {
      expect(helpSpy).toHaveBeenCalledTimes(1);
    },1000);
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
    const helpSpy = jest.spyOn(utils, 'showHelp');

    main.parseUserInput('c 2 3 4 5 6');
    setTimeout(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(helpSpy).toHaveBeenCalledTimes(1);
    },1000);

  });

  it('parseUserInput for invalid canvas commands', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const showHelpSpy = jest.spyOn(utils,'showHelp');

    main.parseUserInput('c');
    setTimeout(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(showHelpSpy).toHaveBeenCalledTimes(1);
    },1000);

  });

  it('parseUserInput for valid canvas commands', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    main.parseUserInput('c 1 1');
    setTimeout(() => {
      expect(consoleLogSpy).toHaveBeenCalled();
    },1000);
  });
});
