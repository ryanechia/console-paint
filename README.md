# console-paint

Dependencies:

* Node 14.17+.
* Yarn 1.22.5

## Installation
```shell
yarn install
```
npm commands are not recommended to be used with this repo

## Developing 
```shell
yarn dev
```
`nodemon` will allow hot re-loading as file changes are saved.

## Running unit tests
```shell
yarn test
```
`jest` will output the coverage report in addition to the test case results

## Linting
```shell
yarn lint
```
`eslint` has been setup with recommended defaults and some overrides to enforce typechecks

## Running the program
```shell
yarn start
```
when prompted you can use these commands to interact (case-insensitive): 
```
    Q                            Quit Program
 
    H, Help                      Show Help
 
    C <width> <height>           Create a new canvas of specified width and height.

    L <x1> <y1> <x2> <y2>        Create a new line from (x1,y1) to (x2,y2).

    R <x1> <y1> <x2> <y2>        Create a new rectangle from (x1,y1) to (x2,y2).

    B <x1> <y1> <fill-content>   Paint bucket fill on point (x1,y1) with specified <fill-content></fill-content>.

    ls                           Show the Canvas in all its beautiful glory!
```

## Dev Notes
### Design choices
* Run loop is intended to be synchronous to await user input
* App -> API -> Service - 3 layer architecture
* Mocks used in unit tests where appropriate
* Recursive floodfill is clearly faster to write, but stack overflow is not desired as input range is not limited
* A lot of time was spent configuring jest + getting test case 1 to work.
  * `jest` is slow - `setTimeout`'s are a workaround to allow the function time to complete assertion before the test case completes
    instead of asserting too early and failing
* linting is also enabled.
* the script feature-set makes it CI/CD ready


### Unhandled special cases
* I have assumed that the user will generally enter most happy path inputs. e.g. 
  * They know what coordinates to enter for a drawing a line vs drawing a rectangle as both inputs are similar
  * They won't input numbers larger than the width/height of the terminal window's printable space
* Diagonal lines are not supported and should error out.
* e2e tests and destructive tests are not performed.
