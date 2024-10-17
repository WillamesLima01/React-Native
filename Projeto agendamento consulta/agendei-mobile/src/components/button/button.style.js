import { COLORs, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  btn: {
    width: "100%",    
    padding: 12,
    borderRadius: 6
  },

  primary: {
    backgroundColor: COLORs.blue
  },

  Danger: {
    backgroundColor: COLORs.red
  },

  text: {
    color: COLORs.white,
    fontSize: FONT_SIZE.md,
    textAlign: "center"
  },
};