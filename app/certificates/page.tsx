import CertificateHero from "@/components/certificates/CertificateHero";
import CertificateGrid from "@/components/certificates/CertificateGrid";

export default function CertificatesPage() {
  return (
    <>

      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <CertificateGrid />
      </main>
    </>
  );
}