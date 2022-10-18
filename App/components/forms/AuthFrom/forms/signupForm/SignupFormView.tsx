import React from "react";
import styles from "../../AuthForm.module.scss";
import { Button, TextField } from "@material-ui/core";
import { ISignupForm } from "../../Auth.form.interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchemaValidation } from "../../../../../utils/schemas/signupSchema.validation";

export const SignupForm: React.FC<ISignupForm> = (props) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(SignupSchemaValidation),
  });

  return (
    <form
      onSubmit={form.handleSubmit(() => {})}
      className={styles.loginContent}
    >
      <h1 className={styles.title}>Регистрация через почту</h1>
      <h5 onClick={props.onOpenLoginForm} className={styles.subtitle}>
        или <span>войти в аккаунт</span>
      </h5>
      <TextField
        name="name"
        {...form.register("name")}
        value={props.signupCredentials.name}
        onChange={props.onChangeSignupCredentials("name")}
        className="mb-20"
        size="small"
        label="Имя"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        name="email"
        {...form.register("email")}
        value={props.signupCredentials.email}
        onChange={props.onChangeSignupCredentials("email")}
        className="mb-20"
        size="small"
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        required
      />
      <TextField
        name="password"
        {...form.register("password")}
        value={props.signupCredentials.password}
        onChange={props.onChangeSignupCredentials("password")}
        size="small"
        label="Пароль"
        type="password"
        variant="outlined"
        fullWidth
        required
      />
      <Button
        className="mt-30"
        color="primary"
        variant="contained"
        type="submit"
      >
        Зарегестрироваться
      </Button>
    </form>
  );
};
