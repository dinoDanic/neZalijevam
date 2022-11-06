import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Icon } from "./icons";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: Icon;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
  haveError?: boolean;
}

export interface InputMap {
  id: number;
  register: UseFormRegisterReturn<string>;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  error?: FieldError | undefined;
  icon?: Icon;
}
