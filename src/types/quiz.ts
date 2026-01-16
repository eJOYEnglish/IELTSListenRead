export interface Part1Option {
    text: string;
    score: number;
}

export interface Part1Question {
    id: number;
    question_text: string;
    options: Part1Option[];
}

export interface Part2Question {
    id: string;
    skill: "Listening" | "Reading";
    question_text: string;
    type: "multi_select";
    options: string[];
}

export interface Recommendation {
    question_type: string;
    reason: string;
    solution: string;
}

// Data structure for part2_recommendations.json
export interface RecommendationData {
    recommendations: {
        [skill: string]: {
            [problem: string]: Recommendation[];
        };
    };
}

export interface QuizData {
    part1: {
        title: string;
        questions: Part1Question[];
    };
    part2: {
        title: string;
        questions: Part2Question[];
    };
}
