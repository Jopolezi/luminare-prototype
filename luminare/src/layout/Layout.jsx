import { Outlet } from 'react-router'
import styled from 'styled-components'
import Navbar from '../assets/Navbar'

const Wrapper = styled.div`
padding-bottom: 70px;
`

const Layout = () => {

  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
        <Navbar />
    </>
  )
}

export default Layout