import { COLORs, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    container: {
        backgroundColor: COLORs.white,
        flex: 1,
        paddingTop: 12        
    },

    item: {
        borderWidth: 1,
        borderColor: COLORs.gray4,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15
    },

    title: {
        fontSize: FONT_SIZE.md,
        color: COLORs.gray3       
    },

    text: {
        fontSize: FONT_SIZE.md,
        color: COLORs.gray1        
    }
   
};