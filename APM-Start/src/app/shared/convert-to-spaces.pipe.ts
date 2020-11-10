import { Pipe } from '@angular/core';

@Pipe({
    name: "convertToSpaces"
})
export class ConvertToSpacesPipe implements Pipe{
    name: string = "convertToSpaces";
    pure?: boolean;
    transform(value : string , character : string): string{
        return value.replace(character, " ");
    }
}