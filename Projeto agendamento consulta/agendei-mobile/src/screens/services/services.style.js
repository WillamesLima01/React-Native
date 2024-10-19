import { COLORs, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    container: {
        backgroundColor: COLORs.white,
        flex: 1        
    },

    banner: {
        backgroundColor: COLORs.blue,
        justifyContent: "center",
        alignItens: "center",
        paddingTop: 10,
        paddingBottom: 25

    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORs.white,
        fontWeight: "bold",
        marginTop: 15        
    },

    specialty: {
        fontSize: FONT_SIZE.md,
        color: COLORs.white,        
        marginTop: 3        
    }
   
};