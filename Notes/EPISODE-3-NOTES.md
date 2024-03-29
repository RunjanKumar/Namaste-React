# create Script for run the project and test
Example => "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
use npm run start && npm start
use npm run build (only start script run wihtout run word)

# React.createElement => ReactElement-js Object => HTMLElement(render)
when we render on the dom it convert to html

# JSX (babel convert jsx to React.createElement) => React.createElement => ReactElement-js Object => HTMLElement(render)
jsx is not a part of the react. jsx in not html in js . it is HTML-like or XML-like Syntax.
jsx react reactElement.
jsx engine understand emcaScript (es6).
transpile(convert the code into another from) the code before it reached the sj engine.
transpile work done by parcel and parcel use babel for it.
in jsx use camelcase for giving the attribute to the html
multiline jsx need to wrapped into brackets because babel understands where to its start and where its end . single line does not need to be wrapped.


# React Component 
type of react component= 1. class based component( old way) 2. functional based component( new way ) 
functional component are that which return react element in thr form of jsx.
component compostion when we add another react component to the other react component.
{} in jsx we write javascript component.

