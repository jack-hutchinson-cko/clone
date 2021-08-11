import { getDataBySize } from './layout';

const checkIteration =
  (isTablet: boolean, isMobile: boolean, defaultValue: number) =>
  ({ field, value, result }: { field?: string; value?: number; result: number }) => {
    const dataBySize = field
      ? {
          [field]: value,
        }
      : {};
    expect(
      getDataBySize({
        dataBySize,
        isMobile,
        isTablet,
        defaultValue,
      }),
    ).to.equal(result);
  };

describe('layout', () => {
  describe('getDataBySize', () => {
    it('Check default value', () => {
      const iteration = checkIteration(false, false, 1);
      iteration({ result: 1 });
    });

    it('If isTablet is true', () => {
      const iteration = checkIteration(true, false, 1);
      const testData: [string, number, number][] = [
        ['mobile', 22, 1],
        ['tablet', 222, 222],
        ['desktop', 2222, 2222],
      ];
      iteration({ result: 1 });
      testData.forEach(([field, value, result]) => iteration({ field, value, result }));
    });

    it('If isMobile is true', () => {
      const iteration = checkIteration(false, true, 1);
      const testData: [string, number, number][] = [
        ['mobile', 22, 22],
        ['tablet', 222, 222],
        ['desktop', 2222, 2222],
      ];
      iteration({ result: 1 });
      testData.forEach(([field, value, result]) => iteration({ field, value, result }));
    });
  });
});
