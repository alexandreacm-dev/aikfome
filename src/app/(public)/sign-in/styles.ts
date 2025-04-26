import { ThemeProp } from '@/utils';
import { PressableProps, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }: ThemeProp) => theme.colors.bg.primary};
   justify-content: center;
`;

const ContainerLogo = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
    /* background-color:  ${({ theme }: ThemeProp) => theme.colors.bg.bg_primary}; */
`;

const Logo = styled.View`
   width: 150px;
   padding: 10px;
   border-radius: 12px;
   justify-content: center;
   align-items: center;
`;

const ContainerForm = styled.View`
   flex: 2;
   padding: 20px;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   border-width: 1px;
   border-color: ${({ theme }: ThemeProp) => theme.colors.bg.secondary};
   background-color:  ${({ theme }: ThemeProp) => theme.colors.bg.secondary};
`;

const ContainerInput = styled.View`
   width: 100%;
   padding: 15px;
   border-radius: 12px;
   border-width: 1px;
   border-color: ${({ theme }: ThemeProp) => theme.colors.ui.secondary};
   margin-bottom: 10px;
`;

const Input = styled.TextInput<TextInputProps>`
   width: 100%;
   font-size: 16px;
`;

const PressableButton = styled.Pressable<PressableProps>`
   width: 100%;
   padding: 16px;
   border-radius: 50px;
   justify-content: center;
   align-items: center;
   background-color: ${({ theme }: ThemeProp) => theme.colors.bg.primary};
   margin-top: 10px;
`;

const ContainerFormInput = styled.View`
   flex: 3;
   justify-content: flex-start;
   align-items: center;
   background-color: ${({ theme }: ThemeProp) => theme.colors.bg.secondary};
`;

const ContainerBottom = styled.View`
   width: 100%;
   display: flex;
   gap: 3px;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-top: 10px;
   margin-bottom: 10px;
   background-color: ${({ theme }: ThemeProp) => theme.colors.bg.secondary};
`;

const ContainerLogoForm = styled.View`
   flex: 1;
   padding: 10px;
   justify-content: center;
   align-items: center;
`;


export {
   Container,
   ContainerInput,
   Input,
   PressableButton,
   ContainerLogo,
   ContainerForm,
   Logo,
   ContainerLogoForm,
   ContainerFormInput,
   ContainerBottom
}