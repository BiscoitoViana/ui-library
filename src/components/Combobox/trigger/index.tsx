import { Dispatch } from "react"
import {
  type ComboboxReducerAction,
  type ComboboxReducerState
} from "../actions/types"
import { TriggerContainer } from "./TriggerContainer"
import { TriggerContent } from "./TriggerContent"

type ComboboxTriggerProps<T> = {
  state: ComboboxReducerState<T>
  dispatch: Dispatch<ComboboxReducerAction<T>>
  optionKey: keyof T
  optionLabel?: keyof T
  customOptionLabel?: (value: T) => JSX.Element
  label?: string
  value: T | null
}

function ComboboxTrigger<T>({
  state,
  dispatch,
  ...props
}: ComboboxTriggerProps<T>): JSX.Element {
  return (
    <TriggerContainer
      state={state}
      dispatch={dispatch}
    >
      <TriggerContent {...props} />
    </TriggerContainer>
  )
}

export default ComboboxTrigger