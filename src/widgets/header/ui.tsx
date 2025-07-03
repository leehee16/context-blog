'use client';
import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        <Image src="/vercel.svg" alt="logo" width={50} height={50} />
        <nav className="flex gap-4">
          <a href="/" className="text-blue-600 hover:underline">홈</a>
          <span className="mx-2">|</span>
          <a href="/about" className="text-blue-600 hover:underline">소개</a>
        </nav>
      </div>
    </header> 
  );
}