import { useNavigate } from "react-router-dom";
import { InputDefault } from "../../components/Input";
import { FormStepContainer } from "./styles";

import { useForm, EFormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export const FormStepOne = () => {
  const history = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: EFormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handlerNextStep = () => {
    if (state.name !== "") {
      history("/step-two");
    }
  };

  const handlerNameChanged = (e: ChangeEvent) => {
    dispatch({
      type: EFormActions.setName,
      payload: e,
    });
  };

  return (
    <FormStepContainer>
      <p>Step {state.currentStep}/3</p>
      <h1>Let's start with your name</h1>
      <p>Fill in the field below with your full name.</p>

      <hr />
      <InputDefault
        autoFocus={true}
        nameLable="Full name"
        value={state.name}
        onHandleNameChange={handlerNameChanged}
      />

      <button onClick={handlerNextStep}>Next</button>
    </FormStepContainer>
  );
};
