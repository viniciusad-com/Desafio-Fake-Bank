import { AbstractControl } from "@angular/forms";


export class HomeValidators {
  static CPFValidator(control: AbstractControl) {
    const cpf = control.value;

    let controlSum: number = 0;
    let controlMod: number;
    let controlValid: boolean;

    const regex = new RegExp('[0-9]{11}');

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    )
    controlValid = false;
      
    else {
      for (let i = 1; i <= 9; i++)
        controlSum = controlSum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      controlMod = (controlSum * 10) % 11;

      if (controlMod == 10 || controlMod == 11) controlMod = 0;
      if (controlMod != parseInt(cpf.substring(9, 10))) controlValid = false;

      controlSum = 0;
      for (let i = 1; i <= 10; i++)
        controlSum = controlSum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      controlMod = (controlSum * 10) % 11;

      if (controlMod == 10 || controlMod == 11) controlMod = 0;
      if (controlMod != parseInt(cpf.substring(10, 11))) controlValid = false;
      controlValid = true;
    }

    if (controlValid) return null;

    return { cpfInvalido: true };
  }

  static matchPassword(control: AbstractControl) {
    let password = control.get('senha')?.value;
    let confirmation = control.get('confirmacao')?.value;

    if (password === confirmation) return null;

    return control.get('confirmacao')?.setErrors({ passwordDontMatch: true });
    
    }
}