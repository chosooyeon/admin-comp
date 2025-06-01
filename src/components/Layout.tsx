import React from 'react';
import { 
  containerClasses, 
  headerClasses, 
  getMainClasses,
  backButtonClasses,
  titleClasses,
  homeIndicatorClasses,
  indicatorBarClasses 
} from '@/styles/theme/layout';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  hasBackButton?: boolean;
  hasHomeIndicator?: boolean;
}

const Layout = ({
  children,
  title,
  hasBackButton = false,
  hasHomeIndicator = false,
}: LayoutProps) => {
  return (
    <div className={containerClasses}>
      {title && (
        <header className={headerClasses}>
          <div className="flex items-center h-full px-4">
            {hasBackButton && (
              <button className={backButtonClasses}>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.95405 4.95408L8.95405 4.95402L20.7989 4.95402"
                    stroke="#111111"
                    strokeWidth="1.4"
                  />
                </svg>
              </button>
            )}
            <h1 className={titleClasses}>{title}</h1>
          </div>
        </header>
      )}

      <main className={getMainClasses(Boolean(title))}>{children}</main>

      {hasHomeIndicator && (
        <div className={homeIndicatorClasses}>
          <div className={indicatorBarClasses} />
        </div>
      )}
    </div>
  );
};

export default Layout;