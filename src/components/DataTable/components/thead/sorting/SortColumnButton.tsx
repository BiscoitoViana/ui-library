import { MouseEventHandler } from "react"
import { SortingButtonIcon } from "./SortingButtonIcon"


type SortColumnButtonProps = {
  state: {
    sortable: boolean
    sorted: boolean
    direction: "ascending" | "descending" | undefined
  }
  onClick: MouseEventHandler<HTMLButtonElement>
}

function SortColumnButton({
  state,
  onClick
}: SortColumnButtonProps): JSX.Element {
  if (!state.sortable) {
    return <></>
  }

  if (state.sorted) {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center w-6 h-6 rounded bg-lib-blue-200 absolute right-3 top-1/2 -mt-3"
      >
        <SortingButtonIcon direction={state.direction}  />
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-6 h-6 rounded bg-transparent hover:bg-lib-grey-200 absolute right-3 top-1/2 -mt-3"
    >
      <SortingButtonIcon direction={state.direction} />
    </button>
  )
}



export { SortColumnButton }