import { COLORs, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    service: {
        backgroundColor: COLORs.white,
        flex: 1,
        flexDirection: "row",
        padding: 12,
        borderWidth: 1,
        borderColor: COLORs.gray4  
    },

    containerText: {
        flex: 1
    },

    containerButton: {
        marginTop: 5
    },
    
    description: {  
       fontSize: FONT_SIZE.md,
       color: COLORs.gray3,       
       marginTop: 5
    },

    price: {
        fontSize: FONT_SIZE.md,
        color: COLORs.blue,        
        marginTop: 3      
    }    
};