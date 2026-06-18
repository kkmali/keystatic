import React, { useState, useEffect, useMemo, useRef } from "react";
import * as LucideIcons from "lucide-react";

type FormFieldInputProps<Value> = {
  value: Value;
  onChange(value: Value): void;
  autoFocus: boolean;
  forceValidation: boolean;
};

// Exclude helpers and extract only PascalCase component exports from lucide-react
const ALL_LUCIDE_ICONS = Object.keys(LucideIcons).filter((key) => {
  return (
    /^[A-Z]/.test(key) &&
    (typeof (LucideIcons as any)[key] === "function" || typeof (LucideIcons as any)[key] === "object") &&
    key !== "LucideIcon" &&
    key !== "createReactComponent" &&
    !key.endsWith("Icon")
  );
});

interface IconPickerInputProps extends FormFieldInputProps<string> {
  label: string;
}

const IconPickerInput: React.FC<IconPickerInputProps> = ({ value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Monitor Keystatic theme and system settings to dynamically match colors
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode =
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);


  // Handle Escape key to close the dialog
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Focus search input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Normalize current icon name (strip prefix)
  const activeIconName = useMemo(() => {
    if (!value) return "";
    return value.startsWith("lu:") ? value.replace(/^lu:/, "") : value;
  }, [value]);

  // Find the matching React Component for preview
  const ActiveIconComponent = useMemo(() => {
    if (!activeIconName) return null;
    return (LucideIcons as any)[activeIconName] || null;
  }, [activeIconName]);

  // Filter icons based on search query, limiting rendering to 150 items for speed
  const filteredIcons = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) {
      return ALL_LUCIDE_ICONS.slice(0, 150);
    }
    return ALL_LUCIDE_ICONS.filter((name) => name.toLowerCase().includes(query)).slice(0, 150);
  }, [search]);

  // Styling palette
  const colors = {
    bg: isDark ? "#1e1e24" : "#ffffff",
    text: isDark ? "#f3f4f6" : "#1f2937",
    border: isDark ? "#374151" : "#e5e7eb",
    inputBg: isDark ? "#2e2e3f" : "#f9fafb",
    inputBorder: isDark ? "#4b5563" : "#d1d5db",
    hoverBg: isDark ? "#2d2d38" : "#f3f4f6",
    activeBg: isDark ? "#3b82f6" : "#2563eb",
    activeText: "#ffffff",
    mutedText: isDark ? "#9ca3af" : "#6b7280",
    backdrop: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      <label
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: colors.text,
        }}
      >
        {label}
      </label>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px 14px",
          borderRadius: "6px",
          border: `1px solid ${colors.border}`,
          backgroundColor: colors.inputBg,
          color: colors.text,
          cursor: "pointer",
          fontSize: "14px",
          textAlign: "left",
          outline: "none",
          transition: "all 0.15s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "4px",
              backgroundColor: isDark ? "#1e1e24" : "#f3f4f6",
              border: `1px solid ${colors.border}`,
            }}
          >
            {ActiveIconComponent ? (
              <ActiveIconComponent size={18} />
            ) : (
              <LucideIcons.HelpCircle size={18} style={{ color: colors.mutedText }} />
            )}
          </div>
          <span style={{ fontWeight: activeIconName ? 500 : 400 }}>
            {value ? value : "Select an icon..."}
          </span>
        </div>
        <LucideIcons.ChevronDown size={16} style={{ color: colors.mutedText }} />
      </button>

      {/* Popup Dialog Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.backdrop,
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999999,
          }}
        >
          {/* Modal Panel Container */}
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: colors.bg,
              color: colors.text,
              borderRadius: "12px",
              border: `1px solid ${colors.border}`,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              width: "90%",
              maxWidth: "600px",
              maxHeight: "80vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              animation: "scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: `1px solid ${colors.border}`,
              }}
            >
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>Select Icon</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: colors.mutedText,
                  padding: "4px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LucideIcons.X size={18} />
              </button>
            </div>

            {/* Search Input Bar */}
            <div
              style={{
                padding: "16px 20px 8px 20px",
                display: "flex",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "32px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                  pointerEvents: "none",
                  color: colors.mutedText,
                }}
              >
                <LucideIcons.Search size={16} />
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search lucide icons (e.g. settings, heart, arrow)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px 10px 38px",
                  borderRadius: "6px",
                  border: `1px solid ${colors.inputBorder}`,
                  backgroundColor: colors.inputBg,
                  color: colors.text,
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            {/* Icon Picker Grid */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "10px 20px 20px 20px",
              }}
            >
              {filteredIcons.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 0",
                    color: colors.mutedText,
                  }}
                >
                  <LucideIcons.SearchX size={32} style={{ marginBottom: "8px" }} />
                  <span>No icons found for "{search}"</span>
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                    gap: "8px",
                  }}
                >
                  {filteredIcons.map((name) => {
                    const IconComponent = (LucideIcons as any)[name];
                    const isSelected = activeIconName === name;

                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() => {
                          onChange(`lu:${name}`);
                          setIsOpen(false);
                        }}
                        title={name}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px 4px",
                          borderRadius: "8px",
                          border: isSelected
                            ? `1.5px solid ${colors.activeBg}`
                            : `1px solid ${colors.border}`,
                          backgroundColor: isSelected ? colors.hoverBg : "transparent",
                          color: isSelected ? colors.activeBg : colors.text,
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                          gap: "6px",
                          overflow: "hidden",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.backgroundColor = colors.hoverBg;
                            e.currentTarget.style.transform = "scale(1.05)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.transform = "scale(1)";
                          }
                        }}
                      >
                        {IconComponent && <IconComponent size={20} />}
                        <span
                          style={{
                            fontSize: "10px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            width: "100%",
                            textAlign: "center",
                            color: isSelected ? colors.activeBg : colors.mutedText,
                          }}
                        >
                          {name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                borderTop: `1px solid ${colors.border}`,
                backgroundColor: isDark ? "#19191e" : "#f9fafb",
                fontSize: "12px",
                color: colors.mutedText,
              }}
            >
              <span>
                {search.trim()
                  ? `Found ${filteredIcons.length} matching icons`
                  : `Showing first ${filteredIcons.length} of ${ALL_LUCIDE_ICONS.length} icons`}
              </span>
              {value && (
                <button
                  type="button"
                  onClick={() => {
                    onChange("");
                    setIsOpen(false);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ef4444",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  Clear Selection
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export function lucideIcon(options: { label: string; defaultValue?: string }) {
  return {
    kind: "form" as const,
    Input(props: FormFieldInputProps<string>) {
      return <IconPickerInput {...props} label={options.label} />;
    },
    defaultValue() {
      return options.defaultValue ?? "";
    },
    parse(value: any) {
      if (typeof value !== "string") {
        return "";
      }
      return value;
    },
    serialize(value: string) {
      return { value };
    },
    validate(value: string) {
      return value;
    },
    reader: {
      parse(value: any) {
        if (typeof value !== "string") {
          return "";
        }
        return value;
      },
    },
    label: options.label,
  };
}
