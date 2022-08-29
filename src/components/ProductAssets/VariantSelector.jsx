import React from "react";

const VariantSelector = ({
  variantGroups,
  onSelectOption,
  selectedOptions,
  ...passthrough
}) => (
  <div {...passthrough}>
    {variantGroups.map((group) => (
      <div key={group.id}>
        <span className="text-lg mr-4 font-bold">{group.name}:</span>
        {group.options.map((option) => (
          <span
            key={option.id}
            onClick={() => onSelectOption(group.id, option.id)}
            className={`mr-3 text-md cursor-pointer text-justify ${
              selectedOptions[group.id] &&
              selectedOptions[group.id] === option.id
                ? "underline"
                : "text-none"
            }`}
          >
            {option.name},
          </span>
        ))}
      </div>
    ))}
  </div>
);

export default VariantSelector;
