import { useEffect, useState } from "react"
import { ColumnDef } from "../../types"
import { TRowDraggable } from "./trow/TRowDraggable"

import { Droppable as DroppableBlock } from "react-beautiful-dnd"

type TBodyDroppableProps<T> = {
  data: T[]
  keyExtractor: keyof T
  columnDefs: ColumnDef<T>[]
  customRowStyle?: (data: T) => string
}

function Droppable<T>({
  data,
  keyExtractor,
  columnDefs,
  customRowStyle
}: TBodyDroppableProps<T>): JSX.Element {
  const [enabled, setEnabled] = useState<boolean>(false)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))

    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (!enabled) {
    return <></>
  }

  return (
    <DroppableBlock droppableId="tbody">
      {(provided) => (
        <tbody
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {data.map((row, index) => (
            <TRowDraggable
              key={row[keyExtractor] as string}
              index={index}
              columnDefs={columnDefs}
              data={row}
              keyExtractor={keyExtractor}
              customRowStyle={customRowStyle ? customRowStyle(row) : ""}
            />
          ))}
          {provided.placeholder}
        </tbody>
      )}
    </DroppableBlock>
  )
}

export { Droppable }