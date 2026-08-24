import PrintableResume from "@/components/pages/PrintableResume";

export const metadata = {
  title: "Resume",
  robots: { index: false, follow: false },
};

export default function PrintPage() {
  return <PrintableResume />;
}
