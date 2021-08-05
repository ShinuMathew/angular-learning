import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {

    // A validator function should take an argument of  AbstractControl type and return ValidationErrors or null
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) return {
            cannotContainSpace: {
                spaceFound: true,
                description: 'No spaces must be found'
            }
        }
        else
            null

        // With predefined validators it would be like this
        /* maxlength: {
            requiredLength: 5, 
            actualLength: 7
        }*/
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'ShinuMathew')
                    resolve({
                        shouldBeUnique: true,
                        description: 'Provided username already exists'
                    })
                else
                    resolve(null)
            }, 2000)
        })
    }
}