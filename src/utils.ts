export class Utils {
  public showHelp(): void {
    console.log(`
    Commands Supported (case-insensitive): \n
    Q                            Quit Program\n 
    H, Help                      Show Help\n 
    C <width> <height>           Create a new canvas of specified width and height.\n
    L <x1> <y1> <x2> <y2>        Create a new line from (x1,y1) to (x2,y2).\n
    R <x1> <y1> <x2> <y2>        Create a new rectangle from (x1,y1) to (x2,y2).\n
    B <x1> <y1> <fill-content>   Paint bucket fill on point (x1,y1) with specified <fill-content></fill-content>.\n
    ls                           Show the Canvas in all its beautiful glory!\n
    `);
  }
}
