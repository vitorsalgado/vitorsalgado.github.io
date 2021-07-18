import * as React from 'react'
import SideBar from '@app/features/Me/SideBar'
import Profile from '@app/features/Me/Profile'

export default function Me(): JSX.Element {
  return (
    <SideBar>
      <Profile />
    </SideBar>
  )
}
