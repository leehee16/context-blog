'use client';
import React, { useEffect } from 'react';
import SqlInterpreterEditor from '@/entities/SqlInterpreterEditor';

export default function HomePage() {
  useEffect(() => {
    // Disable page scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      // Restore scrolling when component unmounts
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <main className="flex h-screen overflow-hidden bg-gradient-main">
      {/* 왼쪽 6/10 영역 */}
      <section className="w-3/5 flex flex-col justify-start items-start bg-white/5 relative overflow-hidden" style={{padding: 0}}>
        <div className="relative z-10 w-full p-8">
          <SqlInterpreterEditor />
        </div>
      </section>
      {/* 오른쪽 4/10 영역 (추후 컨텐츠) */}
      <section className="w-2/5 bg-white/5 flex items-center justify-center">
        {/* 오른쪽 컨텐츠 영역 (비워둠) */}
      </section>
    </main>
  );
}
