import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 scale-hover focus-ring theme-transition hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <div className="relative">
        {theme === 'light' ? (
          <Moon className="w-4 h-4 transition-all duration-300 rotate-0 scale-100 text-gray-900" />
        ) : (
          <Sun className="w-4 h-4 transition-all duration-300 rotate-0 scale-100 text-white" />
        )}
      </div>
    </Button>
  );
}