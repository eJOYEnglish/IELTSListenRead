export const calculatePart1Score = (answers: Record<number, number>): number => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0);
};

export type StrategyLevel =
    | 'Starting'
    | 'Fundamental'
    | 'Developing'
    | 'Effective'
    | 'Advanced'
    | 'Independent';

export const getStrategyLevel = (score: number): StrategyLevel => {
    if (score <= 4) return 'Starting';
    if (score <= 10) return 'Fundamental';
    // Max score is 12, so 11-16 fits here
    return 'Independent';
};

export const getLevelDescription = (level: StrategyLevel): { title: string; description: string } => {
    switch (level) {
        case 'Starting':
            return {
                title: 'CHƯA CÓ CHIẾN LƯỢC',
                description: 'Bạn đang học IELTS chủ yếu dựa trên cảm tính hoặc chạy theo số lượng đề. Việc không tiến bộ không phải do bạn yếu, mà do bạn chưa được hướng dẫn cách học đúng.'
            };
        case 'Fundamental':
            return {
                title: 'BIẾT CÁCH LÀM, NHƯNG THIẾU HỆ THỐNG',
                description: 'Bạn đã hiểu rằng cần phân tích lại bài, nhưng chưa có quy trình ôn luyện hiệu quả và ổn định. Đây là giai đoạn dễ chững band nhất nếu không có người dẫn đường.'
            };
        case 'Independent':
            return {
                title: 'ĐÃ CÓ CHIẾN LƯỢC',
                description: 'Bạn có tư duy học đúng. Tuy nhiên, chiến lược chỉ hiệu quả khi được điều chỉnh và kiểm soát liên tục. Ở giai đoạn này, giáo viên đóng vai trò coach, giúp bạn tránh những điểm mù khó tự nhận ra.'
            };
        default:
            return { title: '', description: '' };
    }
};

export const getLevelColor = (level: StrategyLevel): string => {
    switch (level) {
        case 'Starting': return 'text-red-500';
        case 'Fundamental': return 'text-yellow-600'; // Changed to yellow/orange
        case 'Independent': return 'text-green-600';
        default: return 'text-gray-900';
    }
};
