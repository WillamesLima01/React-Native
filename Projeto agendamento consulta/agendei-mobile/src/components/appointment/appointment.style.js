import { COLORs, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    appointment: {
        backgroundColor: COLORs.white,
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORs.gray4     
    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORs.gray1,
        marginBottom: 2,        
    },

    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORs.gray3,
        marginBottom: 4       
    },
    
    icon: {
        width: 25,
        height: 25,
        marginRight: 5
    },

    bookingDate: {
        fontSize: FONT_SIZE.sm,
        color: COLORs.gray3,
        marginTop: 3
    },

    bookingHour: {
        fontSize: FONT_SIZE.sm,
        color: COLORs.gray3,
        marginTop: 3
    },

    Booking: {
        flexDirection: "row"
    },

    containerBooking: {
        flex: 1
    },

    containerButton: {
        marginTop: 6
    },

    container: {
        flexDirection: "row"
    }



};