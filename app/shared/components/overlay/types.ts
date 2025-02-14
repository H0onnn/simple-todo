export type Subscriber = () => void;

export interface OverlayProps {
  [key: string]: any;
  overlayKey: string;
  resolve?: (value: unknown) => void;
  duration?: number;
}

export type OverlayType<P = OverlayProps> = (props: P) => any;

export interface OverlayStackItem<P = OverlayProps> {
  overlayKey: string;
  overlay: OverlayType;
  resolve: (value: unknown) => void;
  props: Omit<P, "resolve">;
}

export type OverlayStack<P = OverlayProps> = OverlayStackItem<P>[];

export interface OverlayState {
  stack: OverlayStack;
}

export type OverlayAction =
  | { type: "PUSH"; payload: OverlayStackItem }
  | { type: "POP" }
  | { type: "REMOVE"; payload: { overlayKey: string } }
  | { type: "CLEAR" };

export type ReactOverlayElement = React.ReactElement<
  OverlayProps & { key?: string }
>;
