import React from "react";

interface FilterChipProps {
  title?: string;
  childKey: string;
  parentKey?: string;
  handleCloseClick: (keys: object) => void;
  handleChipClick: (keys: object) => void;
}

const FilterChip: React.FC<FilterChipProps> = ({
  title = "",
  childKey,
  parentKey = "",
  handleCloseClick,
  handleChipClick,
}) => (
  <div className="group relative">
    <button
      onClick={() => handleChipClick({ parent: parentKey, child: childKey })}
      className="relative px-3 py-1 ml-2 border cursor-pointer rounded-lg border-solid border-[#E8E9EB] text-[#656870] text-[14px] hover:border-[#0073E6] min-h-[32px]"
    >
      {title}
    </button>
    <button
      className="p-0 absolute bg-transparent hover:bg-transparent right-[-5px] top-[-5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      onClick={() => handleCloseClick({ parent: parentKey, child: childKey })}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="circle_cross">
          <path
            id="circle"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
            fill="#9B9EA3"
          />
          <path
            id="icon"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.88162 3.88162C3.70613 4.05711 3.70613 4.34164 3.88162 4.51713L5.36449 6L3.88162 7.48287C3.70613 7.65836 3.70613 7.94289 3.88162 8.11838C4.05711 8.29387 4.34164 8.29387 4.51713 8.11838L6 6.63551L7.48287 8.11838C7.65836 8.29387 7.94289 8.29387 8.11838 8.11838C8.29387 7.94289 8.29387 7.65836 8.11838 7.48287L6.63551 6L8.11838 4.51713C8.29387 4.34164 8.29387 4.05711 8.11838 3.88162C7.94289 3.70613 7.65836 3.70613 7.48287 3.88162L6 5.36449L4.51713 3.88162C4.34164 3.70613 4.05711 3.70613 3.88162 3.88162Z"
            fill="white"
          />
        </g>
      </svg>
    </button>
  </div>
);

export { FilterChip };
