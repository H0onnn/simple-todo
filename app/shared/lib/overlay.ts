import { cloneElement, isValidElement } from "react";

import {
  overlayStore,
  type OverlayProps,
  type ReactOverlayElement,
} from "@/app/shared/components/overlay";

function open<T>(
  element: ReactOverlayElement,
  options?: { duration?: number }
): Promise<T> {
  if (!isValidElement(element)) {
    throw new Error("Invalid React element provided to overlay.open");
  }

  const { overlayKey = crypto.randomUUID(), ...props } = element.props;

  const OverlayComponent = (overlayProps: OverlayProps) => {
    return cloneElement(element, { ...overlayProps, ...props });
  };

  return overlayStore.push(overlayKey, OverlayComponent, {
    ...props,
    duration: options?.duration,
  }) as Promise<T>;
}

export const overlay = {
  open,
  close: () => overlayStore.pop(),
  remove: (overlayKey: string) => overlayStore.remove(overlayKey),
  clear: () => overlayStore.clear(),
};
