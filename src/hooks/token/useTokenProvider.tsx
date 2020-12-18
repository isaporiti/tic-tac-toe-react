export default function useTokenProvider(): () => string {
  const tokensInOrder: string[] = ['X', 'O'];
  let nextTokenIndex: number = 0;

  return function () {
    const token: string = tokensInOrder[nextTokenIndex];
    nextTokenIndex = (nextTokenIndex + 1) % tokensInOrder.length;
    return token;
  };
}