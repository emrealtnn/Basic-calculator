import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [result, setResult] = useState("");

    const buttonPress = (buttonText) => {
        setResult(result + buttonText);
    }

    const calculateResult = () => {
        setResult(eval(result));
    }

    const clearResult = () => {
        setResult("");
    }

    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => clearResult()}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("1")}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("2")}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("3")}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("+")}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("4")}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("5")}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("6")}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("-")}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("7")}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("8")}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("9")}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("*")}>
                    <Text style={styles.buttonText}>x</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress(".")}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("0")}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => buttonPress("/")}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => calculateResult()}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultText: {
        fontSize: 30,
        color: "white"
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    button: {
        backgroundColor: "#181818",
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 40
    },
    buttonText: {
        fontSize: 30,
        color: "white"

    }
});
