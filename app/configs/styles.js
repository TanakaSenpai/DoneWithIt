import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.darkGray,
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
};
