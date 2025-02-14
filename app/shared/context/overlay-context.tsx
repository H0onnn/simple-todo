"use client";

import { type ReactNode } from "react";

import {
  useCreateOverlayContainer,
  OverlayRenderer,
} from "@/app/shared/components/overlay";

export const OverlayContext = ({ children }: { children: ReactNode }) => {
  useCreateOverlayContainer();

  return (
    <>
      {children}
      <OverlayRenderer />
    </>
  );
};
