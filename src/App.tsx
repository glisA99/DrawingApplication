import { Grid } from '@material-ui/core';
import React, { useRef } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Navigation from './components/Navigation';
import OptionsMenuLeft from './components/OptionsMenuLeft';
import OptionsMenuRight from './components/OptionsMenuRight';

interface ICanvasContext {
  lineColor: string,
  lineSize: number,
  backgroundColor: string,
  undoCounter: number,
  redoCounter:number,
  clearCounter: number
}



function App() {

  const [canvasState,setCanvasState] = React.useState<ICanvasContext>({
    lineColor: "black",
    lineSize: 1,
    backgroundColor: "white",
    clearCounter: 0,
    redoCounter: 0,
    undoCounter: 0
  });


  const setLineColor = (color:string) => {
    setCanvasState({...canvasState, lineColor: color});
  }

  const setLineSize = (size: number) => {
    setCanvasState({...canvasState, lineSize: size});
  }

  const setBackgroundColor = (color: string) => {
    setCanvasState({...canvasState, backgroundColor: color});
  }

  const undoHistory = () => {
    setCanvasState((prevState) => {
      return {...prevState, undoCounter: prevState.undoCounter + 1}
    });
  }

  const redoHistory = () => {
    setCanvasState((prevState) => {
      return  {...prevState, redoCounter: prevState.redoCounter + 1}
    })
  }

  const clearBoard = () => {
    setCanvasState((prevState) => {
      return  {...prevState, clearCounter: prevState.clearCounter + 1}
    })
  }


  return (
    <div className="App">
        <Navigation />
        <div id="top-div">
          <h2 className='h2-title'>Drawing Board</h2>
        </div>
        <div id="main-grid-div">

          <div className='grid-item'>
            <OptionsMenuLeft setBackgroundColor={setBackgroundColor} setLineColor={setLineColor} setLineSize={setLineSize} />
          </div>

          <Canvas 
            backgroundColor={canvasState.backgroundColor} 
            lineColor={canvasState.lineColor} 
            lineSize={canvasState.lineSize} 
            clearCounter={canvasState.clearCounter}
            redoCounter={canvasState.redoCounter}
            undoCounter={canvasState.undoCounter}
          />

          <div className='grid-item'>
            <OptionsMenuRight undoHistory={undoHistory} redoHistory={redoHistory} clearBoard={clearBoard} />
          </div>

        </div>
    </div>
  );
}

export default App;
