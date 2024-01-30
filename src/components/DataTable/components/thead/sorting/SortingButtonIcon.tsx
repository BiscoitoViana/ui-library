import {
  HiMiniArrowSmallDown,
  HiMiniArrowSmallUp,
  HiOutlineArrowsUpDown
} from "react-icons/hi2";

interface SortIconProps {
  direction: "ascending" | "descending" | undefined
}

function SortingButtonIcon({ direction }: SortIconProps): JSX.Element {
  if (direction === "ascending") {
    return (
      <HiMiniArrowSmallDown
        className="text-lib-blue-700"
        size={16}
      />
    )
  }

  if (direction === "descending") {
    return (
      <HiMiniArrowSmallUp
        className="text-lib-blue-700"
        size={16}
      />
    )
  }

  return (
    <HiOutlineArrowsUpDown
      className="text-lib-grey-400"
      size={16}
    />
  )
}

export { SortingButtonIcon }