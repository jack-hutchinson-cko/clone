import { unescape } from './unescape';

describe('unescape', () => {
  it('Empty string passed', () => {
    expect(unescape('')).to.equal('');
  });
  it('String without htm unescapes', () => {
    expect(unescape('Asd asdasd ss!')).to.equal('Asd asdasd ss!');
  });
  it('Map predefined html unescapes ', () => {
    expect(unescape('Html &amp; css &gt; 0')).to.equal('Html & css > 0');
  });
  it('Map undefined html unescapes ', () => {
    expect(unescape('javascript is my love &#33;')).to.equal('javascript is my love &#33;');
  });
});
