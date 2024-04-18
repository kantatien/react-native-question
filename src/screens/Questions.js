import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {reactQuestion} from "../config/question";
import tw from "twrnc";
import * as Progress from 'react-native-progress';

const Question = ({ navigation }) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [quizProgress, setQuizProgress] = useState(reactQuestion.length);

    const progress = (currentQuestionIndex + 1) / quizProgress;

    const handleNext = () => {
        if (currentQuestionIndex === (reactQuestion.length - 1)) {
            navigation.navigate("Score", { score: score })
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsCorrect(null);

        }
    }

    const handleOptionPress = (pressedOption) => {
        setSelectedOption(pressedOption);

        const isAnswerCorrect = reactQuestion[currentQuestionIndex].correctAnswer === pressedOption
        setIsCorrect(isAnswerCorrect)
        if (isAnswerCorrect) {
            setScore((prevScore) => prevScore + 5);
        }

    }
    return (
        <View style={tw`mt-6 p-4`}>
            <View style={tw`flex-row`}>
                <View style={tw`flex-1`}>
                    <Progress.Bar progress={progress} width={null} height={20} color={"rgb(246 108 40)"} />

                </View>
            </View>
            <Text style={tw`text-2xl mb-4`}>
                {reactQuestion[currentQuestionIndex].question}
            </Text>
            {reactQuestion[currentQuestionIndex].options.map(option => (
                <Pressable style={tw`border-2 border-orange-500 p-4 my-2 rounded-md ${selectedOption === option
                    ? isCorrect
                        ? "bg-green-200 border-green-500"
                        : "bg-red-200 border-red-500"
                    : "border-orange-500"
                    }`}
                    onPress={() => handleOptionPress(option)}
                    disabled={selectedOption}>
                    <Text style={tw`text-lg`}>{option}</Text>
                </Pressable>
            ))}

            <Pressable style={tw`bg-orange-500 p-4 rounded-md mt-6`} onPress={handleNext}>
                <Text style={tw`text-white text-lg text-center font-bold`}>{currentQuestionIndex === (reactQuestion.length - 1) ? "Finish" : "Next"}</Text>
            </Pressable>
        </View>
    );
};

export default Question
const style = StyleSheet.create({});
