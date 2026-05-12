interface PatternDividerProps {
  variant?: "cloud" | "ruyi" | "quxi";
  className?: string;
}

export default function PatternDivider({
  variant = "quxi",
  className = "",
}: PatternDividerProps) {
  if (variant === "cloud") {
    return (
      <div className={`flex items-center justify-center py-4 ${className}`}>
        <svg
          width="200"
          height="24"
          viewBox="0 0 200 24"
          fill="none"
          className="text-mid-gray"
        >
          <path
            d="M0 12h60M140 12h60"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <path
            d="M80 4c-4 0-7 3-7 6 0 2 1 3 3 4-3 1-5 3.5-5 6.5 0 3.5 3 6.5 7 6.5h5c4 0 7-3 7-6.5 0-3-2-5.5-5-6.5 2-1 3-2 3-4 0-3-3-6-7-6z"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
          <circle cx="100" cy="12" r="2" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
    );
  }

  if (variant === "ruyi") {
    return (
      <div className={`flex items-center justify-center py-4 ${className}`}>
        <svg
          width="240"
          height="20"
          viewBox="0 0 240 20"
          fill="none"
          className="text-mid-gray"
        >
          <path
            d="M0 10h70"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <path
            d="M90 10c0-4 3-7 7-7 2 0 4 1.5 5 3.5 1.5-2 4-3.5 7-3.5 4.5 0 8 3.5 8 7.5 0 0.5 0 1-0.2 1.5 2.5 1 4.2 3.5 4.2 6.5 0 4-3.5 7-7.5 7h-3c-4.5 0-8-3-8-7 0-3 1.5-5.5 4-6.5-0.2-0.5-0.2-1-0.2-1.5 0-4-3.5-7.5-8-7.5-3 0-5.5 1.5-7 3.5-1-2-3-3.5-5-3.5-4 0-7 3-7 7z"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M170 10c0-3 2.5-5.5 5.5-5.5 1.8 0 3.5 1.2 4 3 1-1.8 3-3 5-3 3.5 0 6.5 3 6.5 6 0 0.4 0 0.8-0.1 1.2 2 0.8 3.6 3 3.6 5.3 0 3.5-3 6-6.5 6h-2.5c-3.5 0-6.5-2.5-6.5-5.5 0-2.5 1.5-4.5 3.5-5.5-0.1-0.4-0.1-0.8-0.1-1.2 0-3-3-6-6.5-6-2 0-4 1.2-5 3-0.5-1.8-2.2-3-4-3-3 0-5.5 2.5-5.5 5.5z"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            opacity="0.25"
          />
          <path d="M240 10h-70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>
    );
  }

  // quxi - 窃曲纹
  return (
    <div className={`flex items-center justify-center py-6 ${className}`}>
      <svg
        width="280"
        height="16"
        viewBox="0 0 280 16"
        fill="none"
        className="text-mid-gray"
      >
        <path
          d="M0 8h80"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        {/* 窃曲纹主体 */}
        <g opacity="0.5">
          <path
            d="M100 8c0-5 4-8 8-8 3 0 5 2 6 4 1-3 4-5 7-5 5 0 8 4 8 8"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M129 8c0 5-4 8-8 8-3 0-5-2-6-4-1 3-4 5-7 5-5 0-8-4-8-8"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
          <circle cx="119" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
        </g>
        {/* 中心装饰 */}
        <g opacity="0.35">
          <path
            d="M136 3l4 5-4 5M144 3l-4 5 4 5"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
          />
        </g>
        {/* 右侧窃曲纹 */}
        <g opacity="0.5">
          <path
            d="M152 8c0-5 4-8 8-8 3 0 5 2 6 4 1-3 4-5 7-5 5 0 8 4 8 8"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M181 8c0 5-4 8-8 8-3 0-5-2-6-4-1 3-4 5-7 5-5 0-8-4-8-8"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
          <circle cx="171" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
        </g>
        <path
          d="M200 8h80"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
