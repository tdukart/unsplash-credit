/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import styled from '@emotion/styled';

interface UnsplashCreditProps {
  active?: boolean;
  userName: string;
  name: string;
  display?: 'inline' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const CreditLink = styled.a`
    background-color: black;
    color: white;
    text-decoration: none;
    padding: 4px 6px;
    font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.2;
    display: inline-block;
    border-radius: 3px;

    &:hover {
        color: white;
    }
`;

const UnsplashLogoWrapper = styled.span`
    display: inline-block;
    padding: 2px 3px;
`;

const UnsplashLogo = styled.svg`
    height: 12px;
    width: auto;
    position: relative;
    vertical-align: middle;
    top: -2px;
    fill: white;
`;

enum VerticalAlign {
  top,
  bottom,
}

enum HorizontalAlign {
  left,
  right,
}

interface WrapperProps {
  active?: boolean;
  vAlign?: VerticalAlign;
  hAlign?: HorizontalAlign;
  inline?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
    position: absolute;
    transition: opacity 250ms, width 250ms;
    overflow: hidden;
    white-space: nowrap;
    border-radius: 3px;
    opacity: .5;
    width: 32px;
    
    bottom: ${(props) => (props.vAlign === VerticalAlign.bottom ? '3px' : 'auto')};
    top: ${(props) => (props.vAlign === VerticalAlign.top ? '3px' : 'auto')};
    left: ${(props) => (props.hAlign === HorizontalAlign.left ? '3px' : 'auto')};
    right: ${(props) => (props.hAlign === HorizontalAlign.right ? '3px' : 'auto')};
    
    .unsplash-credit-photog {
      display: inline-block;
      padding: 2px 3px;
      opacity: 0;
      color: white;
    }
    
    &:hover, .unsplash-credit-active {
      width: 100%;
      opacity: 1;
      
      .unsplash-credit-photog {
        opacity: 1;
      }
    }
`;

const getVerticalAlignment = (display: UnsplashCreditProps['display']): VerticalAlign | undefined => {
  if (display === 'top-left' || display === 'top-right') {
    return VerticalAlign.top;
  }
  if (display === 'bottom-left' || display === 'bottom-right') {
    return VerticalAlign.bottom;
  }
  return undefined;
};

const getHorizontalAlignment = (display: UnsplashCreditProps['display']): HorizontalAlign | undefined => {
  if (display === 'top-left' || display === 'bottom-left') {
    return HorizontalAlign.left;
  }
  if (display === 'top-right' || display === 'bottom-right') {
    return HorizontalAlign.right;
  }
  return undefined;
};

const UnsplashCredit: React.FC<UnsplashCreditProps> = ({
  active = false,
  userName,
  name,
  display,
}: UnsplashCreditProps) => (
  <Wrapper
    className={active ? 'unsplash-credit-active' : ''}
    inline={(display === 'inline') || !display}
    vAlign={getVerticalAlignment(display)}
    hAlign={getHorizontalAlignment(display)}
  >
    <CreditLink
      href={`https://unsplash.com/@${userName}?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge`}
      target="_blank"
      rel="noopener noreferrer"
      title={`Download free do whatever you want high-resolution photos from ${name}`}
    >
      <UnsplashLogoWrapper>
        <UnsplashLogo
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <title>Unsplash Logo</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
        </UnsplashLogo>
      </UnsplashLogoWrapper>
      <span className="unsplash-credit-photog">{name}</span>
    </CreditLink>
  </Wrapper>
);

export default UnsplashCredit;
