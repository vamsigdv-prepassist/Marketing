"use client";

import React from "react";

/**
 * Intercepts navigation on mobile devices to open the app via deep link
 * or fallback to the App Store / Play Store.
 */
export const handleMobileRedirect = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  action: 'login' | 'register' = 'login'
) => {
  if (typeof window === "undefined" || typeof navigator === "undefined") return;

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;

  if (isAndroid || isIOS) {
    // Intercept default link action
    e.preventDefault();

    // App scheme details
    const deepLinkUrl = action === 'register' ? "mobile://login?mode=register" : "mobile://login";
    const appStoreUrl = "https://apps.apple.com/in/app/prepassist-ai-powered-upsc/id6783227317";
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.prepassist.mobile";
    const storeUrl = isIOS ? appStoreUrl : playStoreUrl;

    const startTime = Date.now();
    
    // Attempt to open deep link
    window.location.href = deepLinkUrl;

    // Fallback after timeout if page remains visible (app didn't open)
    setTimeout(() => {
      if (document.hidden || (document as any).webkitHidden) {
        // Page went to background, app successfully opened
        return;
      }
      
      const elapsed = Date.now() - startTime;
      if (elapsed < 3000) {
        // App didn't open, redirect to the store
        window.location.href = storeUrl;
      }
    }, 2000);
  }
};
