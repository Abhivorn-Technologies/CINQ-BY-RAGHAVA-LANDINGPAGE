"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { EnquiryType } from "@/lib/whatsapp";

interface EnquiryModalContextValue {
  isOpen: boolean;
  enquiryType: EnquiryType;
  openEnquiry: (type?: EnquiryType) => void;
  closeEnquiry: () => void;
  setEnquiryType: (type: EnquiryType) => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextValue | undefined>(
  undefined
);

const POPUP_INTERVAL_MS = 30000; // 30 seconds

export function EnquiryModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>("general");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear any existing timer
  const clearAutoTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Start 30-second recurring timer when popup is closed
  const startAutoTimer = useCallback(() => {
    clearAutoTimer();
    timerRef.current = setTimeout(() => {
      setEnquiryType("general");
      setIsOpen(true);
    }, POPUP_INTERVAL_MS);
  }, [clearAutoTimer]);

  const openEnquiry = useCallback(
    (type: EnquiryType = "general") => {
      clearAutoTimer();
      setEnquiryType(type);
      setIsOpen(true);
    },
    [clearAutoTimer]
  );

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
    startAutoTimer();
  }, [startAutoTimer]);

  // Initial 30s timer when user visits the website, and manage timer on isOpen changes
  useEffect(() => {
    if (!isOpen) {
      startAutoTimer();
    } else {
      clearAutoTimer();
    }

    return () => {
      clearAutoTimer();
    };
  }, [isOpen, startAutoTimer, clearAutoTimer]);

  return (
    <EnquiryModalContext.Provider
      value={{
        isOpen,
        enquiryType,
        openEnquiry,
        closeEnquiry,
        setEnquiryType,
      }}
    >
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error(
      "useEnquiry must be used within an EnquiryModalProvider"
    );
  }
  return context;
}
