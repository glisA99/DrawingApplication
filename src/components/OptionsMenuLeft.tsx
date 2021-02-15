import { Button, Paper } from '@material-ui/core';
import React from 'react';

interface Props {
    setLineColor(color:string):void,
    setLineSize(size:number):void,
    setBackgroundColor(color:string):void
}

export default function(props: Props) {

    const colors = ["black","red","white","yellow","blue","orange","green","pink"];

    return (
        <Paper elevation={3} className='paper-div'>
            <br></br>
            <span>Line color:</span><br></br>
            {colors.map(function(element,index) {
                return <Button 
                    variant="contained" 
                    className='color-button' 
                    style={{backgroundColor: `${element}`}} 
                    key={index} 
                    onClick={(event) => {
                        props.setLineColor(element);
                    }}
                />
            })}
            <br></br><br></br>
            <span>Line size:</span><br></br>
            
            {[1,2,3,4,5,6,7,8,9,10].map(function(element,index) {
                return <Button 
                    variant="contained" 
                    className='size-button' 
                    key={index}
                    onClick={(event) => {
                        props.setLineSize(element);
                    }}
                >
                    {element}px
                </Button>
            })}
            
            <br></br><br></br>
            <span>Board background:</span><br></br>
            {colors.map(function(element,index) {
                return <Button 
                    variant="contained" 
                    className='color-button' 
                    style={{backgroundColor: `${element}`}} 
                    key={index} 
                    onClick={(event) => {
                        props.setBackgroundColor(element);
                    }}
                />
            })}
            
        </Paper>
    )

}