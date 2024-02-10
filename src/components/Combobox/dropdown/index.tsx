import { Dispatch } from "react"
import {
  type ComboboxReducerAction,
  type ComboboxReducerState
} from "../actions/types"

import { Dropdown } from "./Dropdown"
import { DropdownInput } from "./DropdownInput"
import { DropdownList } from "./DropdownList"
import { DropdownEmpty } from "./DropdownEmpty"
import { DropdownLoading } from "./DropdownLoading"
import { DropdownItem } from "./DropdownItem"
import { DropdownItemContent } from "./DropdownItemContent"

type ComboboxDropdownProps<T> = {
  state: ComboboxReducerState<T>
  dispatch: Dispatch<ComboboxReducerAction<T>>
  optionKey: keyof T
  optionLabel?: keyof T
  customOptionLabel?: (value: T) => JSX.Element
  onChange: (value: T | null) => void
  placeholder?: string
  isLoading?: boolean
}

function ComboboxDropdown<T>({
  state,
  dispatch,
  optionKey,
  optionLabel,
  customOptionLabel,
  onChange,
  isLoading,
  placeholder
}: ComboboxDropdownProps<T>): JSX.Element {
  return (
    <Dropdown open={state.open}>
      <DropdownInput
        dispatch={dispatch}
        onChange={onChange}
        state={state}
        placeholder={placeholder}
      />
      <DropdownList>
        <DropdownEmpty isEmpty={state.options !== null && state.options.length === 0} />
        <DropdownLoading isLoading={isLoading} />
        {state.options?.map((option, index) => (
          <DropdownItem
            key={option[optionKey] as string}
            dispatch={dispatch}
            index={index}
            onClick={() => {
              onChange(option)
              dispatch({ type: "CLOSE-DROPDOWN" })
            }}
            isActive={state.focusedIndex === index}
          >
            <DropdownItemContent
              data={option}
              optionKey={optionKey}
              optionLabel={optionLabel}
              customOptionLabel={customOptionLabel}
            />
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  )
}

export default ComboboxDropdown