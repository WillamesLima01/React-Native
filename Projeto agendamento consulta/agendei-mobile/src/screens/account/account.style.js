import { COLORs, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    container: {
        backgroundColor: COLORs.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },

    containerLogo: {
        alignItems: "center"
    },
  
    logo: {
        width: 100,
        height: 23
    },

    containerInput: {
        marginBottom: 15
    },

    input: {
        backgroundColor: COLORs.gray5,
        padding: 10,
        borderRadius: 6       
    },

    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    footerLink: {
        color: COLORs.blue
    }

};