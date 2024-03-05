import Cookies from 'js-cookie'

import {
  Navbar,
  LogoImg,
  LogoutBtn,
  MainDiv,
  HomeDiv,
  HomeH1,
  HomeCardImg,
} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <MainDiv>
      <Navbar>
        <LogoImg
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutBtn onClick={onClickLogout}>Logout</LogoutBtn>
      </Navbar>
      <HomeDiv>
        <HomeH1>Your Flexibility, Our Excellence</HomeH1>
        <HomeCardImg
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </HomeDiv>
    </MainDiv>
  )
}

export default Home
