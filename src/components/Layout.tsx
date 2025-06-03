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
import { Icon } from '@/components/icons';
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
                <Icon name="chevron-left" size={21} />
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