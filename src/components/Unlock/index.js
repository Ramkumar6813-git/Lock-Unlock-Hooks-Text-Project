import {useState} from 'react'

import {
  BgContainer,
  LockAppContainer,
  DisplayImage,
  Text,
  ToggleButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, toggleLock] = useState(true)

  const onClickToggleClock = () => {
    toggleLock(prevState => !prevState)
  }
  const displayImage = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  return (
    <BgContainer>
      <LockAppContainer>
        <DisplayImage src={displayImage} alt={isLocked ? 'lock' : 'unlock'} />
        <Text>Your Device is {isLocked ? 'Locked' : 'Unlocked'} </Text>
        <ToggleButton onClick={onClickToggleClock}>
          {isLocked ? 'Unlock' : 'Lock'}
        </ToggleButton>
      </LockAppContainer>
    </BgContainer>
  )
}

export default Unlock
