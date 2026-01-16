import recommendationDataRaw from '../data/part2_recommendations.json';
import type { RecommendationData, Recommendation } from '../types/quiz';

const recommendationData = recommendationDataRaw as unknown as RecommendationData;

export interface ProblemRecommendation {
    problem: string;
    recommendations: Recommendation[];
}

export interface GroupedRecommendation {
    problem: string;
    skill: string;
    solutions: string[];
    questionTypes: string[];
}

export const getRecommendations = (selectedProblems: string[]): GroupedRecommendation[] => {
    const result: GroupedRecommendation[] = [];
    const { recommendations } = recommendationData;

    selectedProblems.forEach(problem => {
        let found = false;
        let skill = '';
        let recs: Recommendation[] = [];

        // Check Listening
        if (recommendations.Listening && recommendations.Listening[problem]) {
            skill = 'Listening';
            recs = recommendations.Listening[problem];
            found = true;
        }
        // Check Reading
        else if (recommendations.Reading && recommendations.Reading[problem]) {
            skill = 'Reading';
            recs = recommendations.Reading[problem];
            found = true;
        }

        if (found) {
            // Aggregate unique solutions and question types
            const uniqueSolutions = [...new Set(recs.map(r => r.solution))];
            const uniqueQuestionTypes = [...new Set(recs.map(r => r.question_type))];

            result.push({
                problem,
                skill,
                solutions: uniqueSolutions,
                questionTypes: uniqueQuestionTypes
            });
        }
    });

    return result;
};
