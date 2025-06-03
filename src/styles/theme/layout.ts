import clsx from 'clsx';

export const containerClasses = clsx(
    'relative',
    'w-full',
    'min-h-screen',
    'mx-auto',
    'bg-white'
);

export const headerClasses = clsx(
    'fixed',
    'top-0',
    'left-0',
    'right-0',
    'h-14',
    'bg-white',
    'z-50',
    'mx-auto'
);

export const getMainClasses = (hasTitle: boolean) => clsx(
    'flex-1',
    'pb-[104px]',
    hasTitle && 'pt-14'
);
  
export const backButtonClasses = clsx(
    'w-[30px]',
    'h-[30px]',
    'flex',
    'items-center',
    'justify-center'
);

export const titleClasses = clsx(
    'text-base',
    'font-medium',
    'flex-1',
    'text-center'
);

export const homeIndicatorClasses = clsx(
    'fixed',
    'bottom-0',
    'left-0',
    'right-0',
    'h-[34px]',
    'bg-white',
    'mx-auto'
);

export const indicatorBarClasses = clsx(
    'absolute',
    'left-1/2',
    '-translate-x-1/2',
    'bottom-[8px]',
    'w-[135px]',
    'h-[5px]',
    'bg-black',
    'rounded-full'
);