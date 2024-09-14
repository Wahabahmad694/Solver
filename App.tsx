
import React, { useState } from 'react';
import { StyleSheet, View, Text, Touchable, TouchableOpacity } from "react-native";


function App(): React.JSX.Element {
  const [displayNum, setDisplayNum] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstNum, setFirstNum] = useState('');

  const handleInput = (num: string | number) => {
    if (displayNum === '0') {
      setDisplayNum(num.toString());

    } else {
      setDisplayNum(displayNum + num)
    }
  }

  const handleOperator = (operator: string) => {
    setOperator(operator);
    setFirstNum(displayNum);
    setDisplayNum('0');

  }

  const handleOperation = () => {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(displayNum);

    if (operator === '+') {
      setDisplayNum((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayNum((num1 - num2).toString());
    } else if (operator === 'x') {
      setDisplayNum((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayNum((num1 / num2).toString());
    } else if (operator === '%') {
      setDisplayNum((num1 % num2).toString());
    }

    setOperator(null);
    setFirstNum('');
  }

  const handleClear = () => {
    setDisplayNum('0');
    setOperator(null);
    setFirstNum('');
  }



  return (
    <View style={styles.mainContainer}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayNum}</Text>

      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>

          <TouchableOpacity style={styles.buttonClearing} onPress={handleClear}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonClearing} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonClearing} onPress={() => handleOperator("%")}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleOperator("/")}>
            <Text style={styles.opertaionText}>÷</Text>
          </TouchableOpacity>

        </View>


        <View style={styles.row}>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => handleInput(7)}>
            <Text style={styles.opertaionText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => handleInput(8)}>
            <Text style={styles.opertaionText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => handleInput(9)}>
            <Text style={styles.opertaionText}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleOperator("x")}>
            <Text style={styles.opertaionText}>x</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.row}>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => handleInput(4)}>
            <Text style={styles.opertaionText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => handleInput(5)}>
            <Text style={styles.opertaionText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => handleInput(6)}>
            <Text style={styles.opertaionText}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleOperator("-")}>
            <Text style={styles.opertaionText}>-</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.row}>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => handleInput(1)}>
            <Text style={styles.opertaionText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => handleInput(2)}>
            <Text style={styles.opertaionText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => handleInput(3)}>
            <Text style={styles.opertaionText}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleOperator("+")}>
            <Text style={styles.opertaionText}>+</Text>
          </TouchableOpacity>

        </View>


        <View style={styles.row}>

          <TouchableOpacity style={styles.zeroButton} onPress={() => handleInput("0")}>
            <Text style={styles.opertaionText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonNumbers} onPress={() => console.warn("AC")}>
            <Text style={styles.opertaionText}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOperation} onPress={handleOperation}>
            <Text style={styles.opertaionText}>=</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>

  );
}

const styles = StyleSheet.create(
  {
    mainContainer: {
      flex: 1,
      backgroundColor: 'black',

    },
    displayContainer: {
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginBottom: 10
    },
    buttonContainer: {
      flex: 3.7,
      marginBottom: 5
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 15,
      marginHorizontal: 5
    },
    buttonClearing: {
      flex: 1,
      borderRadius: 50,
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#C5C6C7',
      elevation: 3,
      margin: 2,
      padding: 10
    },
    buttonNumbers: {
      flex: 1,
      borderRadius: 50,
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#595959',
      elevation: 3,
      margin: 2,
      padding: 10
    },
    zeroButton: {
      flex: 3,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#595959',
      elevation: 3,
      margin: 2,
      padding: 10
    },
    buttonOperation: {
      flex: 1,
      borderRadius: 50,
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      elevation: 3,
      margin: 2,
      padding: 10
    },
    buttonText: {
      fontSize: 25,
      color: 'black',
      fontWeight: "600"
    },
    opertaionText: {
      fontSize: 35,
      color: 'white',
      fontWeight: "600"
    },
    displayText: {
      fontSize: 95,
      color: 'white',
      fontWeight: "600"
    }

  }
);

export default App;
