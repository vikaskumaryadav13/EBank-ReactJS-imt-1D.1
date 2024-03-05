import styled from 'styled-components'

export const MainDiv = styled.div`
  background-color: #152850;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 31px;
  height: 100%;
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 19px;
  height: 61px;
`

export const LogoImg = styled.img`
  height: 100%;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1px solid #ffffff;
  height: 41px;
  width: 121px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const HomeH1 = styled.h1`
  font-size: 48px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 41px;
`

export const HomeCardImg = styled.img`
  width: 50%;
`
