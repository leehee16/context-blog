'use client';
import React from 'react';
import Image from 'next/image';
import ThemeToggle from '@/features/theme-toggle';

export default function Header() {
  return (
    <header className="p-3">
      <div className="flex items-center justify-center max-w-3xl mx-auto">
        <nav className="flex gap-4">
          <a href="/" className="text-blue-600 hover:underline dark:text-blue-400">info</a>
          <span className="mx-2">|</span>
          <a href="/project" className="text-blue-600 hover:underline dark:text-blue-400">project</a>
          <span className="mx-2">|</span>
          <a href="/post/1" className="text-blue-600 hover:underline dark:text-blue-400">posts</a>
          <ThemeToggle />
        </nav>
      </div>
    </header> 
  );
}