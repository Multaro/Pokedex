export const generateSearchList = (qnt: number): number[] => {
    return Array.from({ length: qnt }, (_, i) => {
        return i + 1;
    });
}