import React from "react";
import { cn } from "../utils";
import { Checkbox } from "./checkbox";
import { Button } from "./button";

// Define the props using an interface
interface LessonCardProps {
  type: string;
  id?: string;
  imageSrc?: string;
  title?: string;
  description?: string;
  className?: string; // This prop should be optional
  checked?: boolean;
  providerName?: string;
  hasFavorite?: boolean;
  showPreview?: boolean;
  showCheckbox?: boolean;
  handleCheckboxChange?: (id: string | undefined) => void;
  handleAssign?: (id: string | undefined) => void;
  handleFavoriteClick?: (id: string | undefined) => void;
  handleView?: (id: string | undefined) => void;
  handleClickCard?: (id: string | undefined) => void;
}

// Apply the interface to the component props
const LessonCard: React.FC<LessonCardProps> = ({
  type = "grid",
  id,
  imageSrc,
  title,
  description,
  className,
  checked = false,
  providerName,
  hasFavorite = false,
  showPreview = false,
  showCheckbox = false,
  handleCheckboxChange = () => {},
  handleAssign = () => {},
  handleFavoriteClick = () => {},
  handleView = () => {},
  handleClickCard = () => {},
}) => {
  const aspectRatio = "56.36%"; // This is for the aspect ratio of 124px height / 220px width

  if (type === "grid") {
    return (
      <div
        className={cn(
          "group cursor-pointer w-[220px] bg-[#FFF] outline outline-[1px] rounded-lg outline-[#E8E9EB] relative hover:outline-[#0073E6] hover:outline-[2px]",
          className,
        )}
        onClick={() => handleClickCard(id)}
        data-cy="lesson-card"
      >
        <div className="w-full">
          <div className="relative w-full" style={{ paddingTop: aspectRatio }} data-cy="card-image">
            <img
              src={imageSrc}
              alt="card-img"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
              data-cy={`card-image-${id}`}
            />
          </div>
          {showCheckbox && (
            <div
              className={`absolute top-[10px] left-[10px] ${checked ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}
            >
              <Checkbox
                checked={checked}
                id={id}
                onCheckedChange={() => handleCheckboxChange?.(id)}
                onClick={(e) => e.stopPropagation()}
                data-cy="lesson-card-checkbox"
              />
            </div>
          )}
          <div className="">
            <div
              className={`absolute 2xl-range:h-[20px] 2xl-range:w-[20px] cursor-pointer top-[10px] right-[10px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center ${
                hasFavorite
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              } transition-opacity duration-300`}
              onClick={(e) => {
                e.stopPropagation();
                handleFavoriteClick(id);
              }}
              data-cy="lesson-card-favorite-icon"
            >
              {hasFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <g clip-path="url(#clip0_432_3321)">
                    <path
                      d="M6 2.41218C7.5 0.162179 12 0.162179 12 4.202C12 6.17545 10 8.49551 6 11.1622C2 8.49551 0 6.17545 0 4.202C0 0.162179 4.5 0.162179 6 2.41218Z"
                      fill="#0073E6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_432_3321">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <g clip-path="url(#clip0_432_1968)">
                    <path
                      d="M6 2.41221C7.5 0.16221 12 0.16221 12 4.20203C12 6.17548 10 8.49554 6 11.1622C2 8.49554 0 6.17548 0 4.20203C0 0.16221 4.5 0.16221 6 2.41221ZM11 4.20203C11 2.83571 10.3883 2.10362 9.39447 1.93422C8.42831 1.76953 7.33987 2.20518 6.83205 2.96691L6 4.21498L5.16795 2.96691C4.66013 2.20518 3.57169 1.76953 2.60554 1.93422C1.61171 2.10362 1 2.83571 1 4.20203C1 5.65503 2.63344 7.6236 6 9.95349C9.36656 7.6236 11 5.65503 11 4.20203Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_432_1968">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
            {showPreview && (
              <div
                className="absolute 2xl-range:h-[20px] 2xl-range:w-[20px] 2xl-range:top-[41px] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[45px] right-[10px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  handleView(id);
                }}
                data-cy="lesson-card-preview-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 7.75C6.9665 7.75 7.75 6.9665 7.75 6C7.75 5.0335 6.9665 4.25 6 4.25C5.0335 4.25 4.25 5.0335 4.25 6C4.25 6.9665 5.0335 7.75 6 7.75Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 2.5C8.64835 2.5 10.9345 3.93067 12 6C10.9345 8.06933 8.64834 9.5 6 9.5C3.35165 9.5 1.06551 8.06933 0 6C1.06551 3.93067 3.35166 2.5 6 2.5ZM6 3.5C8.08228 3.5 9.86934 4.52139 10.8432 6C9.86934 7.47861 8.08228 8.5 6 8.5C3.91772 8.5 2.13066 7.47861 1.15684 6C2.13067 4.52139 3.91772 3.5 6 3.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            )}
            <Button
              variant="default"
              className="absolute 2xl-range:mt-0 h-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[70px] right-[10px] text-[#FFF] text-[12px] font-semibold text-center mt-2"
              onClick={(e) => {
                e.stopPropagation();
                handleAssign(id);
              }}
              data-cy="lesson-card-assign-button"
            >
              Assign
            </Button>
          </div>
        </div>
        <div className="p-4 h-[96px]">
          <p className="text-[14px] text-[#000] font-semibold leading-4 line-clamp-2" data-cy={`lesson-title-${id}`}>
            {title}
          </p>
          <p className="text-[12px] text-[#656870] font-normal mt-[4px] line-clamp-1" data-cy={`provider-name-${id}`}>{`By ${providerName || "-"}`}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={cn(
          "group cursor-pointer flex relative w-full h-[126px] bg-[#FFF] outline rounded-lg outline-[1px] outline-[#E8E9EB] hover:outline-[#0073E6] hover:outline-[2px]",
          className,
        )}
        onClick={() => handleClickCard(id)}
        data-cy="lesson-card"
      >
        <div className="min-w-[220px]">
          <img
            src={imageSrc}
            alt="card-img"
            className="h-[126px] w-[220px] object-cover rounded-tl-lg rounded-bl-lg"
            data-cy={`card-image-${id}`}
          />
        </div>
        {showCheckbox && (
          <div
            className={`absolute top-[10px] left-[10px] ${checked ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}
          >
            <Checkbox
              checked={checked}
              id={id}
              onCheckedChange={() => handleCheckboxChange?.(id)}
              onClick={(e) => e.stopPropagation()}
              data-cy="lesson-card-checkbox"
            />
          </div>
        )}
        <div className="">
          <div
            className={`absolute cursor-pointer top-[10px] left-[185px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center ${
              hasFavorite ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-300`}
            onClick={(e) => {
              e.stopPropagation();
              handleFavoriteClick(id);
            }}
            data-cy="lesson-card-favorite-icon"
          >
            {hasFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clip-path="url(#clip0_432_3321)">
                  <path
                    d="M6 2.41218C7.5 0.162179 12 0.162179 12 4.202C12 6.17545 10 8.49551 6 11.1622C2 8.49551 0 6.17545 0 4.202C0 0.162179 4.5 0.162179 6 2.41218Z"
                    fill="#0073E6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_432_3321">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clip-path="url(#clip0_432_1968)">
                  <path
                    d="M6 2.41221C7.5 0.16221 12 0.16221 12 4.20203C12 6.17548 10 8.49554 6 11.1622C2 8.49554 0 6.17548 0 4.20203C0 0.16221 4.5 0.16221 6 2.41221ZM11 4.20203C11 2.83571 10.3883 2.10362 9.39447 1.93422C8.42831 1.76953 7.33987 2.20518 6.83205 2.96691L6 4.21498L5.16795 2.96691C4.66013 2.20518 3.57169 1.76953 2.60554 1.93422C1.61171 2.10362 1 2.83571 1 4.20203C1 5.65503 2.63344 7.6236 6 9.95349C9.36656 7.6236 11 5.65503 11 4.20203Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_432_1968">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
          {showPreview && (
            <div
              className="absolute cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[45px] left-[185px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleView(id);
              }}
              data-cy="lesson-card-preview-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 7.75C6.9665 7.75 7.75 6.9665 7.75 6C7.75 5.0335 6.9665 4.25 6 4.25C5.0335 4.25 4.25 5.0335 4.25 6C4.25 6.9665 5.0335 7.75 6 7.75Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 2.5C8.64835 2.5 10.9345 3.93067 12 6C10.9345 8.06933 8.64834 9.5 6 9.5C3.35165 9.5 1.06551 8.06933 0 6C1.06551 3.93067 3.35166 2.5 6 2.5ZM6 3.5C8.08228 3.5 9.86934 4.52139 10.8432 6C9.86934 7.47861 8.08228 8.5 6 8.5C3.91772 8.5 2.13066 7.47861 1.15684 6C2.13067 4.52139 3.91772 3.5 6 3.5Z"
                  fill="black"
                />
              </svg>
            </div>
          )}
          <Button
            variant="default"
            className="absolute h-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[70px] left-[145px] text-[#FFF] text-[12px] font-semibold text-center mt-2"
            onClick={(e) => {
              e.stopPropagation();
              handleAssign(id);
            }}
            data-cy="lesson-card-assign-button"
          >
            Assign
          </Button>
        </div>
        <div className="p-[16px]">
          <p className="text-[14px] text-[#000] font-semibold leading-4 line-clamp-1" data-cy={`lesson-title-${id}`}>
            {title}
          </p>
          <p className="text-[12px] text-[#656870] font-normal leading-3 mt-[4px]" data-cy={`provider-name-${id}`}>{`By ${providerName || "-"}`}</p>
          <p className="text-[12px] text-[#212329] font-normal leading-4 mt-[12px] line-clamp-2" data-cy={`lesson-description-${id}`}>
            {description}
          </p>
        </div>
      </div>
    );
  }
};

export { LessonCard };
