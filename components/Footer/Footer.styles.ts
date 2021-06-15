import styled from 'styled-components';

export const FooterBackground = styled.div`
  background: ${({ theme }) => theme.colors.successDark};
`;
export const FooterMain = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 80px 64px;
`;
export const FooterIcon = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;
export const FooterLogoWrapper = styled.div`
  flex: 1 1 0%;
`;
export const FooterLinkListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FooterList = styled.div`
  margin-top: 40px;
`;
export const FooterListTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.11em;
  color: ${({ theme }) => theme.colors.white};
`;
export const FooterColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;
export const FooterColumnSubContainer = styled.ul`
  padding: 0;
`;
export const FooterLink = styled.li`
  font-size: 14px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.greyDark};
  & a:hover {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.greyDark};
    transition: border-bottom 0.2s, color 0.5s;
    padding-bottom: 4px;
  }
`;
export const FooterLinkSpecial = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.successDark};
  background: ${({ theme }) => theme.colors.activeBlueLight};
  border-radius: 4px;
  margin-left: 8px;
  padding: 4px;
`;
export const SubFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;
export const SubfooterGridItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SubfooterTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;
export const SubfooterWrapper = styled.ul`
  display: flex;
`;
export const SubfooterLink = styled.li`
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.greyDark};
  padding-left: 40px;

  & a:hover {
    text-decoration: underline;
    padding-bottom: 4px;
  }
`;
export const SubfooterDescription = styled.div`
  font-size: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.greyDark};
  margin-top: 16px;
  width: 38%;
`;
export const SubfooterDescriptionText = styled.p`
  margin: 0;
`;
export const SubfooterSocialLinks = styled.div`
  text-align: right;
  margin-top: 25px;
  width: 60%;
`;
export const SubfooterLogo = styled.a`
  padding-left: 24px;
`;
export const ContainerSubfooterLink = styled.div`
  display: flex;
`;
export const DescriptionLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
