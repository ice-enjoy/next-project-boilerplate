'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NoFound() {
  return (
    <main className='flex-col-center gap-4 w-full h-screen'>
      <h1 className='text-8xl font-bold'>404</h1>
      <h2 className='text-3xl font-bold'>Page Not Found</h2>
      <Link href={'/'} className='mt-5'>
        Back to Home
      </Link>
    </main>
  );
}

