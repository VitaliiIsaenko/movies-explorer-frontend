import React, { useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValidation(target);

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  function setValidation(target) {
    if (target.validity.valueMissing) {
      target.setCustomValidity("Обязательное поле");
    } else if (target.validity.typeMismatch) {
      target.setCustomValidity(`Значение не является валидным ${target.type}`);
    } else if (target.validity.tooShort) {
      target.setCustomValidity(
        `Значение должно быть не менее ${target.minLength}`
      );
    } else if (target.validity.tooLong) {
      target.setCustomValidity(
        `Значение должно быть не более ${target.maxLength}`
      );
    } else {
      target.setCustomValidity("");
    }
  }

  return { values, handleChange, errors, isValid, resetForm };
}
