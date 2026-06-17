import React from "react";
import * as CiIcons from "react-icons/ci";
import * as FaIcons from "react-icons/fa";
import * as LucideIcons from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name?: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24, ...props }) => {
  if (!name) {
    return <LucideIcons.HelpCircle className={className} size={size} {...(props as any)} />;
  }

  // Parse namespace prefix (e.g. ci:CiPaste -> prefix: ci, iconName: CiPaste)
  const parts = name.split(":");
  let prefix = "";
  let iconName = "";

  if (parts.length === 2) {
    prefix = parts[0].toLowerCase();
    iconName = parts[1];
  } else {
    // If no prefix, try to infer it
    iconName = name;
    if (name.startsWith("Ci")) {
      prefix = "ci";
    } else if (name.startsWith("Fa")) {
      prefix = "fa";
    }
  }

  // Fallback map for custom or missing react-icons
  const fallbacks: Record<string, React.ComponentType<any>> = {
    // ci fallbacks
    "cidocgenerate": CiIcons.CiFileOn,
    "ciclose": CiIcons.CiCircleCheck,
    "cicontentlibrary": CiIcons.CiFolderOn,
    "ciaicontent": CiIcons.CiMicrochip,
    "citeamcollab": CiIcons.CiGrid41,
    "ciesignatures": CiIcons.CiPen,
    "cireportsanalytics": CiIcons.CiViewTimeline,
    "ciproposals": CiIcons.CiPaperplane,
    "ciquotes": CiIcons.CiReceipt,
    "cisow": CiIcons.CiViewList,
    "cirfpissue": CiIcons.CiWarning,
    "cicontracts": CiIcons.CiFileOn,
    "cihrdocument": CiIcons.CiUser,
    "cicontractmgmt": CiIcons.CiSettings,
    "cidocgen": CiIcons.CiGrid32,
    "cirfpresponse": CiIcons.CiCircleCheck,
  };

  const cleanIconName = iconName.toLowerCase();

  // 1. Check CI icons
  if (prefix === "ci") {
    // Exact match in react-icons/ci
    const CiComponent = (CiIcons as any)[iconName];
    if (CiComponent) {
      return <CiComponent className={className} size={size} {...props} />;
    }

    // Try fallback map
    const FallbackComponent = fallbacks[cleanIconName];
    if (FallbackComponent) {
      return <FallbackComponent className={className} size={size} {...props} />;
    }

    // Dynamic case-insensitive search
    const ciKeys = Object.keys(CiIcons);
    const matchedKey = ciKeys.find((k) => k.toLowerCase() === cleanIconName);
    if (matchedKey) {
      const MatchedComponent = (CiIcons as any)[matchedKey];
      return <MatchedComponent className={className} size={size} {...props} />;
    }

    // Final CI fallback
    return <CiIcons.CiFileOn className={className} size={size} {...props} />;
  }

  // 2. Check FA icons
  if (prefix === "fa") {
    // Exact match in react-icons/fa
    const FaComponent = (FaIcons as any)[iconName];
    if (FaComponent) {
      return <FaComponent className={className} size={size} {...props} />;
    }

    // Dynamic case-insensitive search
    const faKeys = Object.keys(FaIcons);
    const matchedKey = faKeys.find((k) => k.toLowerCase() === cleanIconName);
    if (matchedKey) {
      const MatchedComponent = (FaIcons as any)[matchedKey];
      return <MatchedComponent className={className} size={size} {...props} />;
    }

    // Final FA fallback
    return <FaIcons.FaBriefcase className={className} size={size} {...props} />;
  }

  // 3. Fallback to Lucide Icons
  // Try exact match in Lucide
  const LucideComponent = (LucideIcons as any)[iconName] || (LucideIcons as any)[iconName.replace(/^(Ci|Fa|Lu)/, "")];
  if (LucideComponent) {
    return <LucideComponent className={className} size={size} {...(props as any)} />;
  }

  // Case-insensitive Lucide match
  const lucideKeys = Object.keys(LucideIcons);
  const cleanLucideName = iconName.replace(/^(Ci|Fa|Lu)/, "").toLowerCase();
  const matchedLucideKey = lucideKeys.find((k) => k.toLowerCase() === cleanLucideName);
  if (matchedLucideKey) {
    const MatchedLucideComponent = (LucideIcons as any)[matchedLucideKey];
    return <MatchedLucideComponent className={className} size={size} {...(props as any)} />;
  }

  // Default fallback icon
  return <LucideIcons.HelpCircle className={className} size={size} {...(props as any)} />;
};
