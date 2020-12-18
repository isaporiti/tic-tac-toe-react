import useTokenProvider from "./useTokenProvider";

describe('useTokenProvider hook function', () => {
  it('should provide an X token when invoked', () => {
    const tokenProvider: () => string = useTokenProvider();

    const token: string = tokenProvider();

    expect(token).toBe('X');
  });
});