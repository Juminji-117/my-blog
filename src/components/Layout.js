import React from "react";

function Layout({children}) {
  return (
    <>
    <main>
    <div style={{display:"flex", gap:20}}>
      <Link href="/">홈</Link>
      <Link href="/about">어바웃</Link>
      <Link href="/test">테스트</Link>
      <Link href="test-space">테스트-스페이스</Link>
      </div>

      {children}

      <div>
        Copyright All rights reserved.
      </div>
      </main>
      </>
  );
}