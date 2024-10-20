import { COLORs, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    container: {
        backgroundColor: COLORs.white,
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-between",      
        marginBottom: 20
    },   

    theme: {
        todayTextColor: COLORs.red,
        selectedDayBackgroundColor: COLORs.blue,
        selectedDayTextColor: COLORs.white,
        arrowColor: COLORs.blue
    },

    textHour: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORs.gray2,
        marginTop: 20

    }

};