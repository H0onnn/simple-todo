"use client";

import { useEffect } from "react";

const OVERLAY_CONTAINER_ID = "overlay-container";

export const useCreateOverlayContainer = () => {
  useEffect(() => {
    if (document.getElementById(OVERLAY_CONTAINER_ID)) return;

    const overlayElement = document.createElement("div");
    overlayElement.id = OVERLAY_CONTAINER_ID;
    overlayElement.style.zIndex = "9999";
    document.body.appendChild(overlayElement);

    return () => {
      document.body.removeChild(overlayElement);
    };
  }, []);

  return null;
};
