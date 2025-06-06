import { useEffect, useRef } from 'react';
import { Icon } from '@/components/icons';
import Button from '@/components/button/Button';

interface BottomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
  showCancel?: boolean;
  cancelText?: string;
}

export default function BottomModal({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = '확인',
  showCancel = true,
  cancelText = '취소'
}: BottomModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        ref={modalRef}
        className="absolute bottom-0 w-full transform transition-transform duration-300 ease-in-out"
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2.5 border-b border-[#EDEDEE] rounded-t-[28px] bg-white">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            {/* <Icon name="x" size={20} /> */}
          </button>
        </div>

        {/* Body */}
        <div className="bg-white px-6 py-4">
          {children}
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-2 p-4 bg-white">
          {showCancel && (
            <Button
              onClick={onClose}
              className="flex-1 bg-[#F7F7F7] border-none"
            >
              {cancelText}
            </Button>
          )}
          {onConfirm && (
            <Button
              onClick={onConfirm}
              className="flex-1 bg-[#FFD700] border-none text-black"
            >
              {confirmText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}