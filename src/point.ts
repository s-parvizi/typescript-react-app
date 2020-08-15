export class PointClass {
    //private readonly x: number;
    //private readonly y: number;

    constructor(private _x: number, private _y: number) {
    }

    draw() {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    }

    getX() {
        return this._x
    }

    get x() {
        return this._x
    }

    setX(value: number) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }

    set x(value: number) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }

    getDistance(another: PointClass) {
        // ...

    }
}
