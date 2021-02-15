import { Button, Divider, Icon, Paper } from '@material-ui/core';
import React from 'react';
import HistoryIcon from '@material-ui/icons/History';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

interface Props {
    undoHistory():void,
    redoHistory():void,
    clearBoard():void
}

export default function(props: Props) {

    return (
        <Paper elevation={3} className='paper-div'>
            <br></br>
            <h3>Undo last move</h3>
            <span>- go back history -</span><br></br><br></br>
            <Button variant="contained" onClick={() => props.undoHistory()}>
                <HistoryIcon />
            </Button>
            <Divider variant="middle" className='divider-margin'/>
            <br></br><br></br>
            <h3>Forward move</h3>
            <span>- go forward history -</span><br></br><br></br>
            <Button variant="contained" onClick={() => props.redoHistory()} >
                <ArrowForwardIcon />
            </Button>
            <Divider variant="middle" className='divider-margin'/>
            <br></br><br></br>
            <h3>Clear board</h3><br></br>
            <Button variant="contained" onClick={() => props.clearBoard()} >
                <DeleteForeverIcon />
            </Button>
        </Paper>
    )

}