import { ChangeEvent } from "react";
import { Input, Label } from "./styles";

type InputProps = {
  nameLable: string;
  autoFocus: boolean;
  value: string;
  onHandleNameChange: (params: any) => void;
};

export const InputDefault = ({
  nameLable,
  autoFocus,
  value,
  onHandleNameChange,
}: InputProps) => {
  return (
    <Label>
      {nameLable}
      <Input
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onHandleNameChange(e.target.value)}
      />
    </Label>
  );
};
