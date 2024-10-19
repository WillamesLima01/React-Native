import { View } from "react-native";
import { styles } from "./shedule.style.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState } from "react";

LocaleConfig.locales["ptbr"] = ptBR;
LocaleConfig.defaultLocale = "ptbr";

function Shedule() {

    const[selected, setSelected] = useState("");
    
    return <View style={ styles.container}>
        <Calendar theme={styles.theme}
            onDayPress={(day) => {
                setSelected(day.dateString)
            }}
            markedDates={{
                [selected]: {selected: true}
            }}

            minDate={new Date().toDateString()}
        />
    </View>
}

export default Shedule;