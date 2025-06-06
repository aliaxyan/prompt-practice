import React from "react";

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
}) => {
  return (
    <div
      tabIndex={0}
      className={
        "group flex flex-col justify-between rounded-xl border bg-white text-[#4a4c5d] p-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:shadow-lg transition-all duration-300 w-[300px] p-[10px] transform origin-center hover:scale-y-[1.125] hover:bg-[#38485c] hover:text-white"
      }
    >
      <div >
        <h3 className="text-[20px] font-semibold mb-0 text-[#4a4c5d] group-hover:text-[#ffffff] transition-colors">{plan}</h3>
        <p className="text-[64px] font-bold mt-[-8px] mb-[-8px] text-[#4a4c5d] group-hover:text-[#ffffff] transition-colors">${price}</p>
        
        <div className="mb-10 divide-y divide-gray-200">
          {features.map((feature, index) => (
            <div key={index} className="text-[20px] font-semibold py-2 text-[#4a4c5d] group-hover:text-[#ffffff] transition-colors">
              {feature}
            </div>
          ))}
        </div>

      </div>
      <button
        className="w-full max-w-[160px] mx-auto py-2 px-4 rounded-lg text-sm font-medium transition text-[#4a4c5d] group-hover:text-[#ffffff] bg-transparent mt-[36px] mb-[36px]"
      >
        SUBSCRIBE
      </button>
    </div>
  );
};
