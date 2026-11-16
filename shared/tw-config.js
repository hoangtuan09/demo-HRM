/* Cấu hình Tailwind dùng chung cho các trang dựng thêm (đồng bộ với trang xuất từ Stitch) */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#001e2f", "outline": "#727782", "primary-fixed": "#d4e3ff",
        "surface-variant": "#e0e3e6", "on-primary-fixed-variant": "#004883", "tertiary": "#005378",
        "secondary-fixed": "#d5e3fc", "outline-variant": "#c1c7d3", "surface-bright": "#f7f9fc",
        "surface-container": "#eceef1", "inverse-primary": "#a4c9ff", "on-error": "#ffffff",
        "error-container": "#ffdad6", "on-secondary": "#ffffff", "surface-dim": "#d8dadd",
        "surface-container-high": "#e6e8eb", "primary": "#1967b2", "error": "#ba1a1a",
        "on-tertiary-fixed-variant": "#004c6e", "secondary-container": "#d5e3fc", "secondary": "#515f74",
        "inverse-surface": "#2d3133", "background": "#f7f9fc", "on-background": "#191c1e",
        "on-primary-fixed": "#001c39", "on-tertiary": "#ffffff", "secondary-fixed-dim": "#b9c7df",
        "surface": "#f7f9fc", "on-secondary-container": "#57657a", "surface-tint": "#1967b2",
        "on-primary-container": "#d6e5ff", "on-surface": "#191c1e", "tertiary-container": "#006c9b",
        "tertiary-fixed": "#c9e6ff", "inverse-on-surface": "#eff1f4", "on-surface-variant": "#414751",
        "on-secondary-fixed": "#0d1c2e", "on-error-container": "#93000a", "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f7", "on-tertiary-container": "#cbe7ff", "primary-container": "#1967b2",
        "primary-fixed-dim": "#a4c9ff", "on-primary": "#ffffff", "tertiary-fixed-dim": "#89ceff",
        "surface-container-highest": "#e0e3e6", "on-secondary-fixed-variant": "#3a485b"
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      spacing: {
        "space-md": "1rem", "space-lg": "1.5rem", "margin-mobile": "1rem", "gutter-mobile": "0.75rem",
        "space-xl": "2rem", "margin": "1.5rem", "gutter": "1.5rem", "space-sm": "0.5rem", "space-xs": "0.25rem"
      },
      fontFamily: (function () {
        var f = ["Be Vietnam Pro", "system-ui", "sans-serif"];
        return { "display": f, "headline-lg": f, "body-md-medium": f, "body-lg": f, "body-sm": f, "headline-md": f, "caption": f, "label-md": f, "body-md": f, "headline-lg-mobile": f, "headline-sm": f, "label-sm": f, "mono-num": f };
      })(),
      fontSize: {
        "display": ["28px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg": ["22px", { lineHeight: "28px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "body-md-medium": ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "500" }],
        "body-lg": ["15px", { lineHeight: "22px", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "18px", letterSpacing: "0", fontWeight: "400" }],
        "headline-md": ["18px", { lineHeight: "24px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "caption": ["12px", { lineHeight: "16px", letterSpacing: "0", fontWeight: "400" }],
        "label-md": ["13px", { lineHeight: "16px", letterSpacing: "0.01em", fontWeight: "500" }],
        "body-md": ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "400" }],
        "headline-lg-mobile": ["20px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-sm": ["16px", { lineHeight: "22px", letterSpacing: "0", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
        "mono-num": ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "500" }]
      }
    }
  }
};
