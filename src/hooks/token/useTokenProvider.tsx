export default function useTokenProvider(): () => string {
  let shouldReturnXToken: boolean = true;

  return function () {
    if (shouldReturnXToken) {
      shouldReturnXToken = !shouldReturnXToken;
      return 'X';
    }
    return 'O';
  };
}