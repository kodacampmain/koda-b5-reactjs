import { useState } from "react";

/**
 * Custom Hook
// Expected usage:
const name = useInput("", { 
  required: true, 
  minLength: 3 
});
<input value={name.value}
onChange={name.onChange} />
{!name.isValid && <p>{name.error}</p>}
<button onClick={name.reset}>Clear</button>
// Features to implement:
// - value state
// - onChange handler
// - isValid flag
// - error messages
// - reset function
 */
/**
 * @typedef useInputHookOutput
 * @property {any} useInputHookOutput.value
 * @property {(e: Event) => void} useInputHookOutput.onChange
 * @property {boolean} useInputHookOutput.isValid
 * @property {string} useInputHookOutput.error
 * @property {() => void} useInputHookOutput.reset
 */
/**
 * Hooks for handling controlled input
 * @param {any} initialState
 * @param {Object} validationRules
 * @param {boolean} validationRules.required
 * @param {number} validationRules.minLength
 * @param {RegExp} [validationRules.pattern]
 * @param {Object} validationRules.numeric
 * @param {boolean} validationRules.numeric.required
 * @param {number} validationRules.numeric.minLength
 * @returns {useInputHookOutput}
 */
function useInput(initialState, validationRules) {
  const [value, setValue] = useState(() => {
    if (typeof initialState === "function") return initialState();
    return initialState;
  });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    // validation
    const inputName = e.target.name || "Input";
    if (validationRules.required && e.target.value == "") {
      setError(`${inputName} cannot be empty`);
      return;
    }
    if (e.target.value.length < validationRules.minLength) {
      setError(
        `${inputName} cannot be less than ${validationRules.minLength} character(s)`,
      );
      return;
    }
    // if (!validationRules.pattern.test(e.target.value)) {
    //   setError("pattern tidak cocok");
    // }
    setError("");
  };

  const reset = () => {
    setError("");
    setValue(() => {
      if (typeof initialState === "function") return initialState();
      return initialState;
    });
  };

  return { value, onChange, isValid: !error, error, reset };
}

export default useInput;
