import { Modal } from "../modal";
import { ButtonSizes } from "../button/button.types";

export type DialogProps = React.ComponentProps<typeof Modal> &
  RejectProps & {
    /** Is Dialog confirm action loading (async) */
    loading?: boolean;
    /** Is dialog confirm action disabled */
    disabled?: boolean;
    /** Callback executed on dialog confirmation*/
    onConfirm: Function;
    /** Label for the confirm button */
    confirmLabel: string;
    /** The size of the buttons on mobile screens or larger */
    size?: ButtonSizes;
    /** The size of the buttons on tablet screens or larger */
    sizeConfined?: ButtonSizes;
    /** The size of the buttons on desktop screens or larger */
    sizeWide?: ButtonSizes;
  };

type RejectProps =
  | {
      /**  Callback executed on dialog rejection */
      onReject: Function;
      /** Label for the reject button */
      rejectLabel: string;
    }
  | {
      /**  Callback executed on dialog rejection */
      onReject?: never;
      /** Label for the reject button */
      rejectLabel?: never;
    };
