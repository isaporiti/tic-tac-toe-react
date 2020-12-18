import useTokenProvider from "./useTokenProvider";

describe('useTokenProvider hook function', () => {
  it('should provide an X token when invoked', () => {
    const tokenProvider: () => string = useTokenProvider();

    const token: string = tokenProvider();

    expect(token).toBe('X');
  });

  it('should provide a O token after providing an X token when invoked intermittently', () => {
    const tokenProvider: () => string = useTokenProvider();

    expect(tokenProvider()).toBe('X');
    expect(tokenProvider()).toBe('O');
  });
});