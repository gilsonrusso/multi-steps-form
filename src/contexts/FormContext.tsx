// Need create a: Context, Reducer, Provider, Hook
import { ReactNode, createContext, useContext, useReducer } from "react";

type FormState = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  mail: string;
  github: string;
};

type Actions<T> = {
  type: T;
  payload: any;
};

type ContextType<T> = {
  state: FormState;
  dispatch: (action: Actions<T>) => void;
};

export enum EFormActions {
  setCurrentStep,
  setName,
  setLevel,
  setMail,
  setGithub,
}

const initialData: FormState = {
  currentStep: 0,
  name: "",
  level: 0,
  mail: "",
  github: "",
};

type FormProviderProps = {
  children: ReactNode;
};

// Context
const FormContext = createContext<ContextType<EFormActions> | undefined>(
  undefined
);

// Reducer

const formReducer = (state: FormState, action: Actions<EFormActions>) => {
  switch (action.type) {
    case EFormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case EFormActions.setName:
      return { ...state, name: action.payload };
    case EFormActions.setLevel:
      return { ...state, level: action.payload };
    case EFormActions.setMail:
      return { ...state, mail: action.payload };
    case EFormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

//Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm need to used inside the FormProvider");
  }
  return context;
};
