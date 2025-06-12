import CertificateSection from "../components/Certificates/CertificateSection";
import { itCertificates, otherCertificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section className="w-full min-h-[80vh] bg-gray-50 font-sans px-4 pt-36 pb-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">
        <CertificateSection
          title="IT & Data"
          color="emerald-600"
          barColor="emerald-100"
          certificates={itCertificates}
        />
        <CertificateSection
          title="Other"
          color="orange-500"
          barColor="orange-100"
          certificates={otherCertificates}
        />
      </div>
    </section>
  );
}
