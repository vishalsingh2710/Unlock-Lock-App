import {useState} from 'react'
import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlock, setUnlock] = useState(false)

  const imageUrl = isUnlock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlock ? 'unlock' : 'lock'
  const text = isUnlock ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlock ? 'lock' : 'unlock'

  const onClickButton = () => {
    setUnlock(prevStatus => !prevStatus)
  }

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </UnlockLockContainer>
  )
}

export default Unlock
