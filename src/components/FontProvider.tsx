'use client';

import { FC, useEffect } from 'react';

const FontProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add Google Fonts preconnect
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    
    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';
    
    // Add Roboto Mono font
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap';
    
    // Add style to apply Roboto Mono
    const style = document.createElement('style');
    style.textContent = `
      body, p, div, span, a, button, input, textarea, li {
        font-family: 'Roboto Mono', monospace !important;
      }
    `;
    
    // Append to document head
    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(fontLink);
    document.head.appendChild(style);
    
    // Force font application after load
    const forceFont = () => {
      document.body.style.fontFamily = "'Roboto Mono', monospace";
      Array.from(document.querySelectorAll('p, div, span, a, button, input, textarea, li'))
        .forEach(el => {
          (el as HTMLElement).style.fontFamily = "'Roboto Mono', monospace";
        });
    };
    
    // Apply immediately and after a delay to ensure it's applied after other styles
    forceFont();
    setTimeout(forceFont, 500);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(preconnect1);
      document.head.removeChild(preconnect2);
      document.head.removeChild(fontLink);
      document.head.removeChild(style);
    };
  }, []);
  
  return <>{children}</>;
};

export default FontProvider; 