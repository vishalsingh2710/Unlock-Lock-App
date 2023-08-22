import styled from 'styled-components'

export const UnlockLockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
`
export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
`
export const Image = styled.img`
  width: 96px;
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 90px;
  line-height: 1.2px;
  font-weight: 400;
  color: #e2e8f0;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 68px;
    line-height: 1.5;
  }
`
export const Button = styled.button`
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border: none;
  text-align: center;
  border-radius: 4px;
  padding: 12px 24px 12px 24px;
  margin-top: 90px;
  color: #ffffff;
  background-color: #06b6d4;
  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`
