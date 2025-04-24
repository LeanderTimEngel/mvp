import Link from 'next/link';
import { COLORS } from '@/lib/constants';

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
}

export default function PricingCard({
  title,
  badgeLabel,
  badgeColorClass = 'bg-gray-200 text-gray-800',
  price,
  unit,
  priceSubText,
  description,
  features,
  action,
}: PricingCardProps) {
  const disabled = action.disabled;
  const btnClasses = disabled
    ? 'from-gray-400 to-gray-500 cursor-not-allowed opacity-60'
    : `from-[${COLORS.primary}] to-[${COLORS.secondary}]`;

  return (
    <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
      <div className="flex justify-between items-start mb-4">
        <h3 className={`text-xl font-semibold text-[${COLORS.dark}]`}>{title}</h3>
        {badgeLabel && (
          <span className={`${badgeColorClass} text-sm font-semibold px-4 py-1 rounded-full uppercase shadow-sm`}>{badgeLabel}</span>
        )}
      </div>

      {price && (
        <div className="mb-2">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900">
            {price} {unit && <span className="text-base font-normal text-gray-500">{unit}</span>}
          </p>
          {priceSubText && <p className="text-lg font-semibold text-green-600 mt-1">{priceSubText}</p>}
        </div>
      )}

      <p className="text-gray-600 mb-6 text-sm">{description}</p>

      <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-lg mr-2.5 mt-0.5">{item.icon}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>

      <Link
        href={action.href}
        className={`w-full text-center bg-gradient-to-r ${btnClasses} text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg`}
        aria-disabled={disabled || undefined}
        onClick={(e) => disabled && e.preventDefault()}
      >
        {action.label}
      </Link>
    </div>
  );
} 