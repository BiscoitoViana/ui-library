import { ColumnDef } from "../../../types"
import { TColumn } from "./TColumn"

import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd"
import { Handle } from "./Handle";

type TRowProps<T> = {
  data: T
  index: number
  keyExtractor: keyof T
  columnDefs: ColumnDef<T>[]
  customRowStyle?: string
}

function TRowDraggable<T>({
  data,
  index,
  keyExtractor,
  columnDefs,
  customRowStyle
}: TRowProps<T>): JSX.Element {
  const className = "border border-lib-grey-200 text-lib-grey-500 bg-white"

  return (
    <Draggable
      draggableId={`${data[keyExtractor] as string}`}
      index={index}
    >
      {(provided: DraggableProvided,
        snapshot: DraggableStateSnapshot) => (
        <tr
          className={`${className} ${customRowStyle} ${snapshot.isDragging ? "table bg-lib-blue-100" : ""}`}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Handle {...provided.dragHandleProps} />
          {columnDefs.map(col => (
            <TColumn
              key={col.column as string}
              data={data}
              columnDef={col}
            />
          ))}
        </tr>
      )}
    </Draggable>
  )
}

export { TRowDraggable }