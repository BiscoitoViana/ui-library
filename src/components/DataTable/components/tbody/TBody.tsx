import { DragDropContext, DropResult, OnDragEndResponder } from "react-beautiful-dnd"

import { ColumnDef } from "../../types"

import { Standard } from "./Standard"
import { Droppable } from "./Droppable"
import { onDragRow } from "../../reorder"

type TBodyProps<T> = {
  data: T[]
  keyExtractor: keyof T
  columnDefs: ColumnDef<T>[]
  customRowStyle?: (data: T) => string
  draggable: boolean
  onRowDropped?: (value: T[]) => void
}

function TBody<T>({
  draggable,
  onRowDropped,
  ...props
}: TBodyProps<T>): JSX.Element {
  if (!draggable) {
    return (
      <Standard
        {...props}
      />
    )
  }

  const handleDragEnd: OnDragEndResponder = (value: DropResult) => {
    if (onRowDropped !== undefined) {
      onDragRow({
        data: props.data,
        destination: value.destination,
        source: value.source,
        callback: (value) => onRowDropped(value)
      })
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable {...props} />
    </DragDropContext>
  )
}

export { TBody }