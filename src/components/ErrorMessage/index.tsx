import React from "react";
import * as S from "./styles";
import Text from "@/components/Text";

type Props = {
  message: string;
};
const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <S.Container>
      <Text type="default" style={{ color: "#FFF" }}>
        {message}
      </Text>
    </S.Container>
  );
};

export default ErrorMessage;
