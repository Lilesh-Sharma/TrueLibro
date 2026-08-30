interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  isLight?: boolean;
}

export default function BrandLogo({ className = '', showTagline = false, isLight = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual chevron emblem matching TrueLibro logo */}
      <div className="relative flex flex-col items-center justify-center w-9 h-9 sm:w-10 sm:h-10">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none">
          {/* Top Chevron - Deep Navy/Slate */}
          <path
            d="M50 12 L88 38 L72 49 L50 34 L28 49 L12 38 Z"
            fill={isLight ? '#60A5FA' : '#1E2548'}
          />
          {/* Middle Chevron - Crimson/Coral */}
          <path
            d="M50 40 L88 66 L72 77 L50 62 L28 77 L12 66 Z"
            fill="#E11D48"
          />
          {/* Bottom Chevron - Light Rose */}
          <path
            d="M50 68 L88 94 L72 100 L50 88 L28 100 L12 94 Z"
            fill="#FDA4AF"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span className={`text-xl sm:text-2xl font-black tracking-tight ${isLight ? 'text-white' : 'text-slate-900'}`}>
            TRUE
          </span>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-rose-600 ml-1">
            LIBRO
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
            Finance • Tax • Wealth
          </span>
        )}
      </div>
    </div>
  );
}

