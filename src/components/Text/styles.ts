import { StyleSheet } from 'react-native';
import lightTheme from '@/styles';

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 20,
    color: lightTheme.colors.text.primary,
    fontFamily: lightTheme.fonts.body,
  },
  location: {
    fontSize: 16,
    color: lightTheme.colors.text.primary,
    fontFamily: lightTheme.fonts.body,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontFamily: lightTheme.fonts.title,
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 32,
    color: lightTheme.colors.text.primary,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: lightTheme.fonts.subTitle,
    color: lightTheme.colors.text.primary,
  },
  link: {
    fontSize: 16,
    lineHeight: 20,
    color: lightTheme.colors.text.textBlack,
    fontFamily: lightTheme.fonts.title,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  linFavorite: {
    fontSize: 14,
    color: lightTheme.colors.text.link,
    fontFamily: lightTheme.fonts.subTitle,
    fontWeight: 'bold'
  },
});

export default styles;