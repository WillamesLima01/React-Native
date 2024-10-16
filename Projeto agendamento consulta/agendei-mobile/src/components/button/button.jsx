import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props){

    const TesteClick = () => {
        alert('Botão foi clicado!');
      };   
    
    return <TouchableOpacity onPress={TesteClick} style={styles.btn}>

             <Text style={styles.text}>
                {props.text}
             </Text>

    </TouchableOpacity>
    
}

export default Button;