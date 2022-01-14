import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, QUERIES, WEIGHTS } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import Icon from '../Icon'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav>
        <TabletAndBelowNav>
          <NavLink>
            <Icon id='shopping-bag' />
          </NavLink>
          <NavLink>
            <Icon id='search' />
          </NavLink>
          <NavLink>
            <Icon id='menu' />
          </NavLink>
        </TabletAndBelowNav>
        <DesktopOnlySide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 16px clamp(
          16px,
          4vw,
          32px
  );
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndBelow} {
    //justify-content: space-between;
    align-items: center;
  }

`

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`

const TabletAndBelowNav = styled.nav`
  display: none;
  
  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    align-items: center;

    gap: clamp(
            24px,
            20vw,
            48px
    )
  }
`

const Side = styled.div`
  flex: 1;
`

const DesktopOnlySide = styled(Side)`
  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
