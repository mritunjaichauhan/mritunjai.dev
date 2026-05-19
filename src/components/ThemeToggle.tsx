import { useTheme } from '../context/theme';

/**
 * Inline minimal theme toggle. Half-filled circle in ink color.
 * Lives inside the nav-aside in Topbar — no fixed positioning.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      style={{
        appearance: 'none',
        background: 'transparent',
        border: 0,
        padding: 0,
        marginLeft: 6,
        width: 18,
        height: 18,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--ink)',
      }}
    >
      <span
        style={{
          width: 11,
          height: 11,
          borderRadius: '50%',
          border: '1px solid currentColor',
          background: isDark
            ? 'linear-gradient(90deg, transparent 50%, currentColor 50%)'
            : 'linear-gradient(90deg, currentColor 50%, transparent 50%)',
        }}
      />
    </button>
  );
}
