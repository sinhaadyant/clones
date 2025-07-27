"use client";

import React from 'react';

interface HydrateClientProps {
  children: React.ReactNode;
}

export function HydrateClient({ children }: HydrateClientProps) {
  return <>{children}</>;
} 