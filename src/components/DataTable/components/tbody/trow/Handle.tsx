import { ComponentProps } from "react";
import { MdDragIndicator } from "react-icons/md";

type HandleProps = ComponentProps<"button">

function Handle(props: HandleProps): JSX.Element {
  return (
    <td className="border-l border-lib-grey-200 pl-2 overflow-hidden w-8">
      <button
        {...props}
        className="pointer w-4"
        type="button"
      >
        <MdDragIndicator className="text-lib-grey-500"/>
      </button>
    </td>
  )
}

export { Handle }