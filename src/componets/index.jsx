import { useState , useEffect } from "react";
function RandomColor() {
    const [typeOfColor , setTypeOfColor] = useState('hex');
    const [color , setColor] = useState('#000000');


    function handleColorUtility(length){
        return Math.floor(Math.random()*length); //Math.floor is used to round the number to the nearest integer.
        //Math.random() is used to generate a random number between 0 and 1.
    }
    function handleCreateHexColor(){
        const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i = 0; i < 6; i++){
            hexColor += hex[handleColorUtility(hex.length)]; //handleColorUtility is used to generate a random number between 0 and the length of the array.
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    function handleCreateRGBColor(){ 
        const r = handleColorUtility(256); 
        const g = handleColorUtility(256);
        const b = handleColorUtility(256);
        const rgbColor = `rgb(${r},${g},${b})`;
        console.log(rgbColor);
        setColor(rgbColor);
    }

    useEffect(()=>{
        if(typeOfColor === 'rgb'){
            handleCreateRGBColor();
        }
        else{
            handleCreateHexColor();
        }
    },[typeOfColor]);


    return ( 
        <div 
        style={{
            backgroundColor: color,
            width : '100%',
            height : '100vh'
        }}
        >
            <button onClick={()=> setTypeOfColor('hex')}>Create Hex Color</button>
            <button onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRGBColor}>Generate Randomm Color</button> 
            <div style={{
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
                color : 'white',
                fontSize : '60px',
                marginTop : '50px',
                flexDirection : 'column',
                fontFamily : 'monospace',
                gap : '20px'
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB' : 'Hex'}</h3>
                <h3>{color}</h3>
            </div>
        </div>
     );
}

export default RandomColor;
