import { getAnchorUrl, getHashValue, cutOffHashValue, updateNavigationHash } from './url';

describe('getAnchorUrl', () => {
  it('Converting to slug', () => {
    expect(getAnchorUrl('test name 1')).to.equal('#test_name_1');
  });
  it('Converting to slug (with hash)', () => {
    expect(getAnchorUrl('test name 1', false)).to.equal('test_name_1');
  });
  it('Empty string passed', () => {
    expect(getAnchorUrl('', false)).to.equal('');
  });
});

describe('getHashValue', () => {
  it('Converting to slug', () => {
    expect(getHashValue('#test_name_1')).to.equal('test_name_1');
  });
  it("If it's not hash", () => {
    expect(getHashValue('test_name_1')).to.equal('test_name_1');
  });
  it("If it's empty", () => {
    expect(getHashValue('')).to.equal('');
  });
});

describe('cutOffHashValue', () => {
  it('Cutting a link with hash', () => {
    expect(cutOffHashValue('/asd/sd#test_name_1')).to.equal('/asd/sd');
  });
  it('Cutting a link with empty hash', () => {
    expect(cutOffHashValue('/asd/sd#')).to.equal('/asd/sd');
  });
  it('Cutting a link without hash', () => {
    expect(cutOffHashValue('/asd/sd')).to.equal('/asd/sd');
  });
});
