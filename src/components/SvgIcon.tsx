import React, { useMemo, ComponentType } from "react";

interface ComponentCache {
  [key: string]: ComponentType<{ className?: string }> | null;
}

const req = require.context("@/assets/icons", true, /\.svg$/);

const icons: ComponentCache = req.keys().reduce((acc: ComponentCache, curr) => {
  const key = curr.replace("./", "").replace(".svg", "");
  acc[key] = req(curr).default;
  return acc;
}, {});

interface SvgIconProps {
  name: string;
  color?: string;
  size?: string;
}

interface SvgIconProps {
  name: string;
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, className }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist in the icon map.`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default SvgIcon;
