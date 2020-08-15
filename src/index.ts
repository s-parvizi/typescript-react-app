import * as React from "react";
import {PointClass} from "./point";

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

/////////////////////////////////////////////////
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

/////////////////////////////////////////////////
enum Color {Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Red;

/////////////////////////////////////////////////
let message = 'abc';
let endsWithC = message.endsWith('c');
console.log(endsWithC);

/////////////////////////////////////////////////
let text;
text = 'abc';
// type insertion
let endWithC = (text as string).endsWith('c');

/////////////////////////////////////////////////
// arrow functions
let log = function (message: string) {
    console.log(message);
};

let doLog = (message: string) => {
    console.log(message);
};

/////////////////////////////////////////////////
// custom types
// inline annotation
let drawPoint = (point: { x: number, y: number }) => {
    console.log(point.x);
    console.log(point.y);
};

const point = {
    x: 1,
    y: 2,
    z: 3
};

drawPoint(point);

/////////////////////////////////////////////////
// custom types
// typescript interface
interface Point {
    x: number,
    y: number
}

let drawPointTwo = (point: Point) => {
    console.log(point.x);
    console.log(point.y);
};

drawPoint(point);

/////////////////////////////////////////////////
// using class
//let pointClass: PointClass = new PointClass();
let pointClass = new PointClass(1, 2);
let x = pointClass.getX();
let xx = pointClass.x;
pointClass.setX(10);
pointClass.x=11;
pointClass.draw();