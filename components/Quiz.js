import React, {useState} from "react";
import { 
  View, 
  StyleSheet, 
  ImageBackground, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  Image, 
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

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={starry_background} style={styles.backgroundPic}>
        <View style={styles.overlay}>
          <ScrollView 
            contentContainerStyle={styles.scrollContainer} 
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.headerText}>Stellar Astronomy Quiz</Text>
            {questions.map((q, index) => (
              <View key={index} style={styles.questionCard}>
                <Text style={styles.questionText}>{q.question}</Text>
                {q.options.map((option) => {
                  let buttonStyle = [styles.optionButton]; 
                  let textStyle = [styles.optionText];

                  if (submitted) {
                    if (option === q.correct) {
                      buttonStyle.push(styles.correctOption); // ✅ Green if correct
                    } else if (selectedAnswers[index] === option) {
                      buttonStyle.push(styles.incorrectOption); // ❌ Red if incorrect
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

            {/* Submit Button */}
            {!submitted ? (
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.resultText}>Quiz Submitted!</Text>
            )}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  backgroundPic: {
    width: width,
    height: height,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    paddingTop: 50, 
  },
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
  optionText: {
    color: "white",
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: "#6423a1", // Purple for selected (before submission)
  },
  correctOption: {
    backgroundColor: "green", // Green for correct answers
  },
  incorrectOption: {
    backgroundColor: "red", // Red for incorrect answers
  },
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