import useTokenProvider from "./useTokenProvider";

describe('useTokenProvider hook function', () => {
  it('should provide an X token when invoked', () => {
    const provideToken: () => string = useTokenProvider();

    const token: string = provideToken();

    expect(token).toBe('X');
  });

  it('should provide X and O tokens each time when invoked intermittently', () => {
    const provideToken: () => string = useTokenProvider();

    expect(provideToken()).toBe('X');
    expect(provideToken()).toBe('O');
    expect(provideToken()).toBe('X');
    expect(provideToken()).toBe('O');
  });
});