import {
  Box,
  Button,
  ButtonGroup,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component'

function Actions() {
  return (
    <div className="container">
      <ReactNotifications />
      <Home />
    </div>
  )
}

function Home() {
  const handleOnClickDefault = () => {
    Store.addNotification({
      title: 'Updated Successfully',
      message: 'Profile Updated',
      type: 'success',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    })
  }
  return (
    <div>
      <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
        <ButtonGroup>
          <Button
            onClick={handleOnClickDefault}
            bg="blue.300"
            _hover={{ bg: 'blue.400' }}
          >
            Update
          </Button>
          <Button bg="blue.300" _hover={{ bg: 'blue.400' }}>
            Discard
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  )
}

export default Actions
