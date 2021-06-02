import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name : "tilecase"
})
export class TileCasePipe implements PipeTransform {
    transform(value: string, args?: any[]) {
        let texts = value.split(' ');
        
        let result = ""
        texts.forEach(text => {
            if (!this._isPreposition(text)|| texts.indexOf(text) === 0)
                result = result + " " + this._capitalize(text)
            else
                result = result + " " + text
        })
        return result
    }

    private _isPreposition(char : string) : boolean{
        let prepositions = ["of", "the", "in", "on", "to", "for"]
        return prepositions.includes(char.toLowerCase());
    }

    private _capitalize(value: string) {
        // let val = value.toLowerCase();
        // return val.charAt(0).toUpperCase() + val.slice(1)
        return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase()
    }
}