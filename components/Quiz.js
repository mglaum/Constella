import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  View, 
  StyleSheet, 
  ImageBackground, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
const starry_background = require("@/assets/images/starry_background.jpg");

const { width, height } = Dimensions.get("window");

const questions = [
  {
    question: "What class of stars are typically blue in color?",
    options: ["M-type", "K-type", "O-type"],
    correct: "O-type",
  },
  {
    question: "What is the process of a red giant star collapsing?",
    options: ["Type I supernova", "Type II supernova", "Giant explosion"],
    correct: "Type II supernova",
  },
  {
    question: "What is the primary fuel source for main-sequence stars?",
    options: ["Helium", "Hydrogen", "Carbon"],
    correct: "Hydrogen",
  },
  {
    question: "Which type of star is the Sun classified as?",
    options: ["White dwarf", "Red giant", "G-type main-sequence star"],
    correct: "G-type main-sequence star",
  },
  {
    question: "What is the name of the process where hydrogen atoms fuse to form helium in a star's core?",
    options: ["Fission", "Nuclear fusion", "Radioactive decay"],
    correct: "Nuclear fusion",
  },
];

const saveUserScore = async (points, userName) => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    let users = storedUsers ? JSON.parse(storedUsers) : [];

    users.push({
      id: Date.now(),
      name: userName || "Anonymous",
      points,
    });

    users.sort((a, b) => b.points - a.points);

    await AsyncStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error("Error saving user score:", error);
  }
};

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");

  const handleAnswerSelect = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    let total = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        total += 1;
      }
    });

    setScore(total);
    setSubmitted(true);
    saveUserScore(total, userName);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={starry_background} style={styles.backgroundPic}>
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <Text style={styles.headerText}>Stellar Astronomy Quiz</Text>
            
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#bbb"
              value={userName}
              onChangeText={setUserName}
              style={styles.textInput}
            />

            {questions.map((q, index) => (
              <View key={index} style={styles.questionCard}>
                <Text style={styles.questionText}>{q.question}</Text>
                {q.options.map((option) => {
                  let buttonStyle = [styles.optionButton]; 
                  let textStyle = [styles.optionText];

                  if (submitted) {
                    if (option === q.correct) {
                      buttonStyle.push(styles.correctOption);
                    } else if (selectedAnswers[index] === option) {
                      buttonStyle.push(styles.incorrectOption);
                    }
                  } else if (selectedAnswers[index] === option) {
                    buttonStyle.push(styles.selectedOption);
                  }

                  return (
                    <TouchableOpacity
                      key={option}
                      style={buttonStyle}
                      onPress={() => handleAnswerSelect(index, option)}
                      disabled={submitted}
                    >
                      <Text style={textStyle}>{option}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}

            {!submitted ? (
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.resultText}>Quiz Submitted! You scored {score} point(s)</Text>
            )}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundPic: { width, height, resizeMode: "cover" },
  overlay: { flex: 1, paddingTop: 50 },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  textInput: {
    width: "90%",
    backgroundColor: "#222",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  questionCard: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    width: "90%",
  },
  questionText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  optionText: { color: "white", fontSize: 16 },
  selectedOption: { backgroundColor: "#6423a1" },
  correctOption: { backgroundColor: "green" },
  incorrectOption: { backgroundColor: "red" },
  submitButton: {
    backgroundColor: "#6423a1",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    width: "90%",
    alignItems: "center",
  },
  submitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    marginBottom: 30,
  },
});

export default Quiz;