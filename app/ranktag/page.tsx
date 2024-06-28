'use client';
import React, { useRef } from 'react';
import {Input, Select, SelectItem} from '@nextui-org/react';

const RankTag = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Reset the canvas
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height)!;
            const bitfont = new FontFace('bitfont', 'url(minecraft-styled-small-latin.ttf)')
        
            // Draw text on the canvas
            const text = event.target.value;
            bitfont.load().then(function(font) {
              document.fonts.add(font);
              ctx.font = '5px bitfont';
              ctx.scale(5, 5)
              ctx.fillText(text, 0, 6);
              ctx.scale(0.2, 0.2)
            });
            
        }
    };

    return (
        <div style={{padding: "20px", display: "block", margin: "10px 10px"}}>
            <Input label="Rank Text" placeholder="Owner, Admin, etc" className="max-w-xs" onChange={handleInputChange} />
            <div style={{display: "flex"}}>
                <Select label="Background type">
                    <SelectItem key="solid">
                        Solid Color
                    </SelectItem>
                    <SelectItem key="horizontal">
                        Horizontal Gradient
                    </SelectItem>
                    <SelectItem key="vertical">
                        Vertical Gradient
                    </SelectItem>
                </Select>
            </div>
            <canvas ref={canvasRef} width="350" height="35" style={{border: "1px solid #555", backgroundColor: "gray"}}></canvas>
        </div>
    );
};

export default RankTag;
