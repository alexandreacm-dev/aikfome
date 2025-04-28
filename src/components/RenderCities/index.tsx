import React from "react";
import * as S from "./styles";
import Text from "@/components/Text";

type ItemProps = {
  item: ICity;
};

const RenderCities: React.FC<ItemProps> = ({ item }) => {
  return (
    <S.StyledCard>
      <Text type="default">{item.name}</Text>
    </S.StyledCard>
  );
};

export default RenderCities;
