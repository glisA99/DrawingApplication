import React from 'react';
import { SimpleDrawingBoard } from 'simple-drawing-board';
import { create } from "simple-drawing-board";

interface Props {
    lineSize: number,
    lineColor: string,
    backgroundColor: string,
    undoCounter: number,
    redoCounter:number,
    clearCounter: number
}

export default function Canvas(props: Props) {

    const [sdb,setSdb] = React.useState<SimpleDrawingBoard | undefined>(undefined);


    React.useEffect(function() {
        if (sdb === undefined) {
            console.log('init sdb')
            setSdb(create(document.getElementById("canvas") as HTMLCanvasElement));
        }
    },[])

    React.useEffect(function() {
        if (sdb !== undefined) {
            sdb.setLineSize(props.lineSize);
            sdb.setLineColor(props.lineColor);
        }
    },[props.lineSize,props.lineColor])

    React.useEffect(() => {
        if (sdb !== undefined) {
            sdb.fill(props.backgroundColor);
        }
    },[props.backgroundColor]);

    React.useEffect(() => {
        if (sdb !== undefined) {
            undoHistory();
        }
    },[props.undoCounter])

    React.useEffect(() => {
        if (sdb !== undefined) {
            redoHistory();
        }
    },[props.redoCounter])

    React.useEffect(() => {
        if (sdb !== undefined) {
            clearBoard();
        }
    },[props.clearCounter])

    const undoHistory = async () => {
        try {
            await (sdb as SimpleDrawingBoard).undo();
        } catch (err) {
            console.log(err);
        }
    }

    const redoHistory = async () => {
        try {
            await (sdb as SimpleDrawingBoard).redo();
        } catch (err) {
            console.log(err);
        }
    }

    const clearBoard = () => {
        (sdb as SimpleDrawingBoard).clear();
    }

    return (
        <div className='grid-item' id='canvas-div'>
          <canvas id="canvas"></canvas>
        </div>
    )

}