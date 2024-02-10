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
    <th className="border-x border-lib-grey-200 bg-lib-grey-100 h-12 shadow-table-header relative"></th>
  )
}

export { DraggableColumn }