import { Link } from "gatsby";
import React from "react"


const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div style={{display:"flex", gap:20}}>
      <Link href="/">홈</Link>
      <Link href="/about">어바웃</Link>
      <Link href="/test">테스트</Link>
      <Link href="test-space">테스트-스페이스</Link>
      </div>
      <h1>Home Page</h1>
    </main>
  )
}

export default IndexPage
