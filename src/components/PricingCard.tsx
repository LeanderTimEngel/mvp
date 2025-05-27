import Link from 'next/link';

export interface Feature {
  icon: string;
  text: string;
}

export interface Action {
  label: string;
  href: string;
  disabled?: boolean;
}

interface PricingCardProps {
  title: string;
  badgeLabel?: string;
  badgeColorClass?: string;
  price?: string;
  unit?: string;
  priceSubText?: string;
  description: string;
  features: Feature[];
  action: Action;
  featured?: boolean;
}

export default function PricingCard({
  title,
  badgeLabel,
  badgeColorClass = 'bg-gradient-to-r from-gray-200/50 to-gray-100/50 text-gray-800 border border-gray-300/50',
  price,
  unit,
  priceSubText,
  description,
  features,
  action,
  featured = false,
}: PricingCardProps) {
  const disabled = action.disabled;

  return (
    <div className={`
      relative group flex flex-col h-full
      ${featured 
        ? 'bg-white/95 scale-105 shadow-2xl border-2 border-[#fa6565]/20' 
        : 'bg-white/90 shadow-xl border border-white/50'
      }
      backdrop-blur-xl rounded-3xl p-8 
      transform transition-all duration-500 
      hover:scale-[1.02] hover:shadow-2xl hover:bg-white
      overflow-hidden
    `}>
      {/* Featured glow effect */}
      {featured && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fa6565]/20 via-[#f2c955]/20 to-[#fa6565]/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      )}
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-extrabold text-[#171c3f]">{title}</h3>
          {badgeLabel && (
            <span className={`${badgeColorClass} text-xs font-bold px-4 py-1.5 rounded-full uppercase shadow-sm backdrop-blur-sm`}>
              {badgeLabel}
            </span>
          )}
        </div>

        {/* Pricing */}
        {price && (
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-4xl sm:text-5xl font-black text-[#171c3f]">
                {price}
              </span>
              {unit && (
                <span className="text-lg font-medium text-[#171c3f]/60 ml-2">
                  {unit}
                </span>
              )}
            </div>
            {priceSubText && (
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1da448] to-[#1da448]/80 mt-2">
                {priceSubText}
              </p>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-[#171c3f]/70 mb-8 text-base leading-relaxed font-medium">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-4 mb-10 flex-grow">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start group/item">
              <div className="w-8 h-8 bg-gradient-to-br from-[#fa6565]/10 to-[#f2c955]/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                <span className="text-lg filter drop-shadow-sm">{item.icon}</span>
              </div>
              <span className="text-[#171c3f]/80 text-sm font-medium leading-relaxed pt-1">
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="mt-auto">
          {disabled ? (
            <button
              className="w-full text-center bg-gray-100 text-gray-400 py-4 px-8 rounded-2xl font-bold cursor-not-allowed opacity-60 border border-gray-200"
              disabled
            >
              {action.label}
            </button>
          ) : (
            <Link
              href={action.href}
              className={`
                group/btn relative w-full inline-flex items-center justify-center
                ${featured 
                  ? 'bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:shadow-xl hover:shadow-[#fa6565]/20' 
                  : 'bg-white border-2 border-[#171c3f]/15 text-[#171c3f] hover:border-[#171c3f]/30 hover:shadow-lg'
                }
                py-4 px-8 rounded-2xl font-bold text-base
                transition-all duration-300 hover:scale-[1.02] overflow-hidden
              `}
            >
              {featured && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#f2c955] to-[#fa6565] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              )}
              <span className="relative flex items-center">
                <span className="mr-2 text-xl group-hover/btn:scale-110 transition-transform duration-300">
                  {featured ? '✨' : '→'}
                </span>
                {action.label}
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      {featured && (
        <>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-2xl opacity-10 rotate-12"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#f2c955] to-[#1da448] rounded-2xl opacity-10 -rotate-12"></div>
        </>
      )}
    </div>
  );
} 