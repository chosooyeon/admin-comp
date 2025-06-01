import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  hasBackButton?: boolean;
  hasHomeIndicator?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  hasBackButton = false,
  hasHomeIndicator = false,
}) => {
  return (
    <div className="relative w-full max-w-[375px] min-h-screen mx-auto bg-white">
      {/* Header */}
      {title && (
        <header className="fixed top-0 left-0 right-0 h-14 bg-white z-50 max-w-[375px] mx-auto">
          <div className="flex items-center h-full px-4">
            {hasBackButton && (
              <button className="w-[30px] h-[30px] flex items-center justify-center">
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
            <h1 className="text-base font-medium flex-1 text-center">
              {title}
            </h1>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`flex-1 px-4 ${title ? 'pt-14' : ''} pb-[104px]`}>
        {children}
      </main>

      {/* Home Indicator */}
      {hasHomeIndicator && (
        <div className="fixed bottom-0 left-0 right-0 h-[34px] bg-white max-w-[375px] mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[8px] w-[135px] h-[5px] bg-black rounded-full" />
        </div>
      )}
    </div>
  );
};

export default Layout; 