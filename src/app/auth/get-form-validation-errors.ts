import { FormGroup, ValidationErrors } from '@angular/forms';

export function getFormValidationErrors(form: FormGroup) {
  const result = {
    invalid: false
  };

  Object.keys(form.controls).forEach(control => {
    const controlErrors: ValidationErrors = form.get(control).errors;
    if (!controlErrors) return;
    result.invalid = true;
    result[control] = [];

    Object.keys(controlErrors).forEach(e => result[control].push(e));
  });

  return result;
}
