import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { QuizData } from '../types/quiz';
import { QuestionCard } from '../components/QuestionCard';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { ArrowRight } from 'lucide-react';
import part1Data from '../data/part1_quiz.json';

// Type assertion since importing json directly
const quizData = part1Data as unknown as QuizData;

export const Part1Quiz: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});

    const questions = quizData.part1.questions;
    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;

    const handleSelectAnswer = (questionId: number, score: number) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: score
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            window.scrollTo(0, 0);
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Finish Part 1
            // Save to local storage or state management context (simplifying with localStorage for now)
            localStorage.setItem('part1Answers', JSON.stringify(answers));
            navigate('/part2');
        }
    };

    const isCurrentAnswered = answers[currentQuestion.id] !== undefined;

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{quizData.part1.title}</h2>
                <p className="text-gray-600 mb-6">Part 1: Strategy Assessment</p>
                <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
            </div>

            <QuestionCard
                question={currentQuestion.question_text}
                options={currentQuestion.options.map(opt => ({
                    label: opt.text,
                    value: opt.score
                }))}
                selectedValues={answers[currentQuestion.id] !== undefined ? [answers[currentQuestion.id]] : []}
                onSelect={(val) => handleSelectAnswer(currentQuestion.id, val)}
                className="mb-8"
            />

            <div className="flex justify-end">
                <Button
                    onClick={handleNext}
                    disabled={!isCurrentAnswered}
                    className="w-full sm:w-auto"
                >
                    {currentQuestionIndex < totalQuestions - 1 ? 'Câu tiếp theo' : 'Tiếp tục sang Phần 2'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
};
