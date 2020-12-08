import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

export const RGB_COLOR_REGEX = /\((\d+),\s*(\d+),\s*(\d+)(,\s*(\d*.\d*))?\)/;

export class Color {
    public r: number = 0;
    public g: number = 0;
    public b: number = 0;
    public a: number = 0;

    constructor()
    constructor(colorStr?: string)
    constructor(r?: string|number, g?: number, b?: number)
    constructor(r?: string|number, g?: number, b?: number, a?: number) {
        if (typeof r === 'string') {
            r = r.trim();
            if (r.indexOf('#') === 0) {
                r = r.substr(r.indexOf('#') + 1);
                this.r = parseInt(r.substr(0, 2), 16);
                this.g = parseInt(r.substr(2, 2), 16);
                this.b = parseInt(r.substr(4, 2), 16);
            } else if (r.indexOf('rgb') === 0) {
                const res = RGB_COLOR_REGEX.exec(r);
                if( res != null) {
                this.r = parseInt(res[1], 10);
                console.log("red:" + this.r)
                this.g = parseInt(res[2], 10);
                console.log("green:" + this.g)
                this.b = parseInt(res[3], 10);
                console.log("blue:" + this.b)
                this.a = res[5] ? parseFloat(res[5]) : 1;
                }
            }
        } else {
            if(r != undefined && g != undefined && b != undefined) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a || 1;
            }
        }
    }

     componentToHex(c:any) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
     rgbToHex() {
        return "#" + this.componentToHex(this.r) + this.componentToHex(this.g) + this.componentToHex(this.b);
      }

    toHex() {
        console.log("TO HEX")
        console.log(this.r)
        console.log(this.r.toString(16))
        return '#' + this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
    }

    toRgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    toRgba() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
}