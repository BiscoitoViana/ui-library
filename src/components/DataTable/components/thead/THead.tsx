import { classnames, position } from "tailwindcss-classnames"

import { ColumnDef } from "../../types"
import { THeading } from "./THeading"
import { SortingReducerState } from "../../sorting/types"
import { DraggableColumn } from "./DraggableColumn"

type THeadProps<T> = {
  columDefs: ColumnDef<T>[]
  stickyHeader: boolean
  hiddenHeader: boolean
  sortByColumn: (column: keyof T) => void
  state: SortingReducerState
  draggable: boolean
}

function THead<T>({
  columDefs,
  draggable,
  hiddenHeader,
  sortByColumn,
  state,
  stickyHeader
}: THeadProps<T>): JSX.Element {
  if (hiddenHeader) {
    return <></>
  }

  const className = ["bg-lib-grey-200 top-0", classnames(
    position({
      [`sticky`]: stickyHeader
    }),
  )]

  return (
    <thead className={className.join(" ")}>
      <tr className="bg-lib-grey-100">
        <DraggableColumn draggable={draggable} />
        {columDefs.map(definition => {
          return (
            <THeading
              key={definition.column as string}
              columnDef={definition}
              state={state}
              sortByColumn={sortByColumn}
            />
          )
        })}
      </tr>
    </thead>
  )
}

export { THead }