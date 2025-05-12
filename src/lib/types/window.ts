import React from "react";

/**
 * Window stages.
 */
export type WindowStage = "DEFAULT" | "MINIMIZED" | "FULLSCREEN";

/**
 * Fired when the window stage changes or the close button is clicked.
 */
export interface WindowActionsEvent {
  nativeEvent: Event;
  stage?: WindowStage;
}

/**
 * Fired when the window is moved or resized.
 */
export interface WindowMoveEvent {
  position: Position;
  dimensions: Dimensions;
}

/**
 * Dimensions and position types.
 */
export interface Dimensions {
  /** Window width in pixels */
  width: number;
  /** Window height in pixels */
  height: number;
}

export interface Position {
  /** Window top offset in pixels */
  top: number;
  /** Window left offset in pixels */
  left: number;
}

/**
 * Used in uncontrolled mode to define the initial state.
 */
export interface InitialState {
  /** Initial window dimensions */
  dimensions?: Partial<Dimensions>;
  /** Initial window position */
  position?: Partial<Position>;
}

/**
 * Minimum and maximum resize constraints.
 */
export interface Constraints {
  /** Minimum size constraints */
  min?: Partial<Dimensions>;
  /** Maximum size constraints */
  max?: Partial<Dimensions>;
}

/**
 * Read/write context.
 */
export interface WindowContext {
  dimensions: Dimensions;
  position: Position;
  stage: WindowStage;

  setDimensions: (dimensions: Partial<Dimensions>) => void;
  setPosition: (position: Partial<Position>) => void;
  setStage: (stage: WindowStage) => void;
}

/**
 * Common props shared between controlled and uncontrolled windows.
 */
export interface CommonWindowProps {
  /** The title displayed in the window header. */
  title?: React.ReactNode;
  /** Custom CSS style object for the root window element. */
  style?: React.CSSProperties;
  /** Optional CSS class for the window. */
  className?: string;
  /** DOM id for the window container element. */
  id?: string;
  /** Automatically focus the window on mount. Default is `true`. */
  autoFocus?: boolean;

  /** Minimum and maximum dimensions for resizing the window. */
  constraints?: Constraints;
  /** The current stage of the window (e.g., minimized, fullscreen). */
  stage?: WindowStage;
  /** Where to append the window in the DOM. If `null`, no React portal is used. */
  appendTo?: HTMLElement | null;
  /** Enables dragging the window by its header. */
  draggable?: boolean;
  /** Enables window resizing via edges. */
  resizable?: boolean;
  /** Automatically snap to screen/container edges when moving. */
  snapToEdges?: boolean;
  /** Whether the window content should re-render during dragging. */
  shouldUpdateOnDrag?: boolean;
  /** Double-clicking the header toggles the stage (e.g., to fullscreen). */
  doubleClickStageChange?: boolean;

  /** Custom render function for the close button. */
  closeButton?: (context: WindowContext) => React.ReactNode;
  /** Custom render function for the maximize button. */
  maximizeButton?: (context: WindowContext) => React.ReactNode;
  /** Custom render function for the minimize button. */
  minimizeButton?: (context: WindowContext) => React.ReactNode;
  /** Custom render function for the restore button. */
  restoreButton?: (context: WindowContext) => React.ReactNode;

  /** Called when the window is closed (via close button or ESC key). */
  onClose?: (event: WindowActionsEvent) => void;
  /** Called when the window is moved. */
  onMove?: (event: WindowMoveEvent) => void;
  /** Called when the window is resized. */
  onResize?: (event: WindowMoveEvent) => void;
  /** Called when the window stage changes. */
  onStageChange?: (event: WindowActionsEvent) => void;
}

/**
 * Exclusive controlled props.
 */
export type ControlledWindowProps = {
  /** Controlled window position */
  position?: Partial<Position>;
  /** Controlled window dimensions */
  dimensions?: Partial<Dimensions>;
  /** Initial state must be undefined in controlled mode */
  initials?: never;
};

/**
 * Exclusive uncontrolled props.
 */
export type UncontrolledWindowProps = {
  /** Controlled values must be undefined in uncontrolled mode */
  position?: never;
  dimensions?: never;
  /** Uncontrolled initial state */
  initials?: InitialState;
};

export type WindowProps = CommonWindowProps &
  (ControlledWindowProps | UncontrolledWindowProps);
