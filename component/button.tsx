import React from "react";
import { Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

interface ButtonProps {
    text: string;
    variant?: "default" | "danger";
    onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress}) => {
    let backgroundColor = "#D5D50B";
    let paddingVertical = 10;
    let paddingHorizontal = 20;

    return (
        <TouchableOpacity
        onPress={() => Alert.alert("Boton presionado", text)}
        style={{
        backgroundColor,
        paddingHorizontal,
        paddingVertical,
        borderRadius: 1,
        alignItems: "center",
        justifyContent: "center", 
        }}
    >
        <Text style={{ color: "white", fontSize: 18 }}>{text}</Text>
    </TouchableOpacity>
    );
};


export default Button;
