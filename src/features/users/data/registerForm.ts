import { CreateUserInput } from "generated/graphql";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { FiLock, FiUser } from "react-icons/fi";
import { InputMap } from "types";

export const registerForm = (
  register: UseFormRegister<CreateUserInput>,
  errors: Partial<FieldErrorsImpl<CreateUserInput>>
): InputMap[] => [
  {
    id: 0,
    placeholder: "Full Name",
    register: register("fullName", { required: "Full name is required" }),
    type: "text",
    error: errors.fullName,
  },
  {
    id: 1,
    placeholder: "Nick Nme",
    register: register("nickName", {required: "Nicka name is required"}),
    type: "text",
    error: errors.nickName,
  },
  {
    id: 2,
    placeholder: "Email",
    register: register("email"),
    type: "email",
    error: errors.email,
    icon: { component: FiUser, size: 24 },
  },
  {
    id: 3,
    placeholder: "Password",
    register: register("password"),
    type: "password",
    error: errors.password,
    icon: { component: FiLock, size: 24 },
  },
];
