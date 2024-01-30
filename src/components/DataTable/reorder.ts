import { DraggableLocation } from "react-beautiful-dnd";

type OnDragEndProps<T> = {
  data: T[]
  source: DraggableLocation
  destination: DraggableLocation | null | undefined,
  callback: (value: T[]) => void
}

function reorderArray<T>(array: T[], startIndex: number, endIndex: number): T[] {
  const result = Array.from(array);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

function onDragRow<T>({
  callback,
  data,
  destination,
  source,
}: OnDragEndProps<T>) {
  if(source.droppableId === destination?.droppableId){
    const reordered = reorderArray<T>(data, source.index, destination.index)
    return callback(reordered) 
  }


}

export { onDragRow }