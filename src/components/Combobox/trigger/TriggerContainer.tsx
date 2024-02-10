import { Dispatch, ReactNode, useCallback } from "react"
import { RxCaretDown } from "react-icons/rx";

import {
  type ComboboxReducerAction,
  type ComboboxReducerState
} from "../actions/types"
import { tv } from "tailwind-variants";

type TriggerContainerProps<T> = {
  state: ComboboxReducerState<T>
  dispatch: Dispatch<ComboboxReducerAction<T>>
  children: ReactNode
}

const variants = tv({
  base: "w-full h-12 border border-lib-grey-300 bg-white flex items-center justify-between rounded-lg",
  variants: {
    open: {
      true: "border-lib-grey-400"
    }
  },
  defaultVariants: {
    open: false
  }
})

function TriggerContainer<T>({
  state,
  dispatch,
  children
}: TriggerContainerProps<T>): JSX.Element {
  const handleToggleDropdown = useCallback(() => {
    dispatch({ type: "TOGGLE-DROPDOWN" })
  }, [dispatch])

  return (
    <button
      role="combobox"
      aria-expanded={state.open}
      aria-controls=""
      className={variants({ open: state.open })}
      onClick={handleToggleDropdown}
    >
      {children}
      <div className="flex items-center justify-center w-12 h-12">
        <RxCaretDown size={20} className="text-lib-grey-400" />
      </div>
    </button>
  )
}

export { TriggerContainer }