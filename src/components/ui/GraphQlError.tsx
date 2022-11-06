import { GraphQLError } from "graphql";
import { ExpandAnimation } from "layout";
import React, { FC } from "react";
import { TextBold, theme } from "styles";

export interface Props {
  error: GraphQLError | null;
}

export const GraphQlError: FC<Props> = ({ error }) => {
  if (!error) return null;

  const json = JSON.parse(JSON.stringify(error, undefined, 2));

  const message: string = json.response?.errors[0]?.message;
  const haveError = message?.length > 0;

  if (!message) {
    return (
      <ExpandAnimation active={!message}>
        <TextBold color={theme.color.red}>Something went wrong</TextBold>
      </ExpandAnimation>
    );
  }

  return (
    <ExpandAnimation active={haveError}>
      <TextBold color={theme.color.red}>{message}</TextBold>
    </ExpandAnimation>
  );
};
