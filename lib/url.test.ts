import { getAnchorUrl } from './url';

describe('url', () => {
  describe('getAnchorUrl', () => {
    it('Converting to slug', () => {
      expect(getAnchorUrl('test name 1')).to.equal('#test_name_1');
    });
    it('Converting to slug (with hash)', () => {
      expect(getAnchorUrl('test name 1', false)).to.equal('test_name_1');
    });
  });
});
