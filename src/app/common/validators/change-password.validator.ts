import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ChangePasswordValidator {

    private static passwordVault: string[] = [
        'shinu1234',
        'shinu0987',
        'test@123',
        'Test@123'
    ];

    static oldPasswordMatch(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!ChangePasswordValidator.passwordVault.includes(control.value)) {
                    resolve({
                        passwordNotMatch: true,
                        message: "Provided password is incorrect"
                    })
                } else
                    resolve(null);
            }, 2000)
        })
    }

    static confirmPasswordMatch(control: AbstractControl): ValidationErrors {
        let newPassword = control.get('newPassword')
        let confirmPassword = control.get('confirmPassword')
        if (newPassword.value !== confirmPassword.value) {
            return {
                confirmPasswordNotMatch: true,
                message: "New and Confirm Passwords are not same"
            }
        }
        return null;
    }

}
