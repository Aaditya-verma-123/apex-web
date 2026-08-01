"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import {
  certificates,
  Certificate,
} from "@/data/certificates";

interface CertificateContextType {
  certificates: Certificate[];

  selectedCertificate: Certificate | null;

  isOpen: boolean;

  openCertificate: (certificate: Certificate) => void;

  closeCertificate: () => void;

  nextCertificate: () => void;

  previousCertificate: () => void;
}

const CertificateContext =
  createContext<CertificateContextType | null>(null);

export function CertificateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  function openCertificate(certificate: Certificate) {
    setSelectedCertificate(certificate);
    setIsOpen(true);
  }

  function closeCertificate() {
    setIsOpen(false);
  }

  function nextCertificate() {
    if (!selectedCertificate) return;

    const currentIndex = certificates.findIndex(
      (c) => c.id === selectedCertificate.id
    );

    const next =
      certificates[(currentIndex + 1) % certificates.length];

    setSelectedCertificate(next);
  }

  function previousCertificate() {
    if (!selectedCertificate) return;

    const currentIndex = certificates.findIndex(
      (c) => c.id === selectedCertificate.id
    );

    const previous =
      certificates[
        (currentIndex - 1 + certificates.length) %
          certificates.length
      ];

    setSelectedCertificate(previous);
  }

  const value = useMemo(
    () => ({
      certificates,

      selectedCertificate,

      isOpen,

      openCertificate,

      closeCertificate,

      nextCertificate,

      previousCertificate,
    }),
    [selectedCertificate, isOpen]
  );

  return (
    <CertificateContext.Provider value={value}>
      {children}
    </CertificateContext.Provider>
  );
}

export function useCertificate() {
  const context = useContext(CertificateContext);

  if (!context) {
    throw new Error(
      "useCertificate must be used inside CertificateProvider."
    );
  }

  return context;
}