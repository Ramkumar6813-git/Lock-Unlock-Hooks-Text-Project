import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #3c2940, #0b0c1e);
`
export const LockAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const DisplayImage = styled.img`
  width: 150px;
  margin-bottom: 10px;
`
export const Text = styled.p`
  color: #e2e8f0;
  font-size: 1em;
  font-family: 'Roboto';
`
export const ToggleButton = styled.button`
  padding: 0.7em 1.5em;
  color: #ffffff;
  background-color: #06b6d4;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  margin-top: 90px;
  text-align: center;
`
