interface DraggableColumnProps {
  draggable: boolean
}

function DraggableColumn({
  draggable
}: DraggableColumnProps): JSX.Element {
  if(!draggable){
    return <></>
  }

  return (
    <th className="border border-lib-grey-200 h-12"></th>
  )
}

export { DraggableColumn }