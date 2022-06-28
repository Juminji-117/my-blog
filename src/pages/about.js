import { Link } from "gatsby";
import React from "react";

function AboutPage() {
  return (
    <main>
      <title>자기소개</title>
      <div style={{display:"flex", gap:20}}>
      <Link href="/">홈</Link>
      <Link href="/about">어바웃</Link>
      <Link href="/test">테스트</Link>
      <Link href="test-space">테스트-스페이스</Link>
      </div>
    <h1>자기소개 페이지 입니다.</h1>
    </main>
  );
}

export default AboutPage;