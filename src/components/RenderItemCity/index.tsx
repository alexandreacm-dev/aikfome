import React from "react";
import * as S from "./styles";
import Text from "@/components/Text";

type ItemProps = {
  item: ICity;
  onGoToCity: (locationName: string, cityId: number) => void;
};

const RenderItemCity: React.FC<ItemProps> = ({ item, onGoToCity }) => {
  const handleCityState = () => {
    onGoToCity(`${item.name}-${item.state.uf}`, item.id);
  };

  return (
    <S.StyledCard onPress={handleCityState}>
      <Text type="default">{item.name}</Text>
    </S.StyledCard>
  );
};

export default RenderItemCity;
