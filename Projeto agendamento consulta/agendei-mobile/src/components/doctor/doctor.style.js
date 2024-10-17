import { COLORs, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    doctor: {
        backgroundColor: COLORs.white,
        flex: 1,
        padding: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORs.gray4,
        marginTop: 3,
        marginBottom: 3,
        borderRadius:8   
    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORs.gray1,
        marginTop: 5        
    },

    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORs.gray3        
    },

    icon: {
        width: 50,
        height: 50,
        marginRight: 8        
    }
   
};