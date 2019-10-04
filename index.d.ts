import { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";

declare module "react-native-raw-bottom-sheet" {
  export type RBSheetProps = {
    animationType?: "none" | "fade" | "slide";
    height?: number;
    minClosingHeight?: number;
    duration?: number;
    closeOnDragDown?: boolean;
    closeOnPressMask?: boolean;
    onClose?: () => void;
    customStyles?: {
      wrapper?: StyleProp<ViewStyle>;
      container?: StyleProp<ViewStyle>;
    };
  };

  class RBSheet extends Component<RBSheetProps> {
    open(): void;
    close(): void;
  }

  export default RBSheet;
}