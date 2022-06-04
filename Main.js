const inputs = [...document.querySelectorAll(".section1_input")];
const outputs = [...document.querySelectorAll(".section1_output")];
const selectFrom = document.querySelector("#form_from");
const selectTo = document.querySelector("#form_to");
const btnMov = document.querySelector(".section1_buttons_movBtn");
const btnXchg = document.querySelector(".section1_buttons_xchgBtn");
const resetBtn = document.querySelector(".section1_buttons_resetBtn");

const $hexReg = /^[0-9a-fA-F]+$/;

const resetAllInputs = () => {
  inputs.map((input) => (input.value = "0000"));
  outputs.map((output) => (output.value = ""));
};

const orderMov = () => {
  let selectedRegisterFrom = selectFrom.selectedOptions[0].value;
  let selectedRegisterTo = selectTo.selectedOptions[0].value;

  if (selectedRegisterFrom !== selectedRegisterTo) {
    inputs.map((input) =>
      $hexReg.test(input.value) && input.name === selectedRegisterFrom
        ? outputs.map((output) => {
            output.name === selectedRegisterTo
              ? (output.value = input.value)
              : false;
          })
        : false
    );
  }
};
const orderXchange = () => {
  let selectedRegister1 = selectFrom.selectedOptions[0].value;
  let selectedRegister2 = selectTo.selectedOptions[0].value;

  if (selectedRegister1 !== selectedRegister2) {
    inputs.map((input) =>
      inputs.map((input2) =>
        $hexReg.test(input.value) &&
        $hexReg.test(input2.value) &&
        input.name === selectedRegister1 &&
        input2.name === selectedRegister2
          ? outputs.map((output) =>
              outputs.map((output2) =>
                output.name === selectedRegister1 &&
                output2.name === selectedRegister2
                  ? ((output2.value = input.value),
                    (output.value = input2.value))
                  : false
              )
            )
          : false
      )
    );
  }
};

resetBtn.addEventListener("click", resetAllInputs);
btnMov.addEventListener("click", orderMov);
btnXchg.addEventListener("click", orderXchange);
