import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

import GetStartedLink from './GetStartedLink';

const Wrapper = styled.section`
  display: flex;
  height: 570px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;

const Title = styled.h1`
  margin: ${rhythm(1)} ${rhythm(0.5)};
  color: #fff;
  font-size: 37px;
  text-align: center;
  font-weight: bold;
  letter-spacing: -1px;
`;

class CTASection extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Build Your Bot Today!</Title>
        <GetStartedLink to="/docs/GettingStarted">Get Started!</GetStartedLink>
      </Wrapper>
    );
  }
}

export default CTASection;
