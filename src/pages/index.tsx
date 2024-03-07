import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useState } from "react";
import Login from "../components/login/Login";
import Chat from "../components/chat/Chat";


const IndexPage: React.FC<PageProps> = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const handleClick = () => {
    setLoggedIn(true)
  }

  return (
    <div>
      {!loggedIn ? <Login onClick={handleClick}/> : <Chat/>}
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
