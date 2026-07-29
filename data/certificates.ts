export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  description: string;
  pdf: string;
  status: "Completed";
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    description:
      "Introduces cybersecurity concepts, security principles, and career fundamentals.",
    pdf: "/images/certificates/foundations-of-cybersecurity.pdf",
    status: "Completed",
  },
  {
    id: 2,
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    description:
      "Focuses on risk management, governance, compliance, and security frameworks.",
    pdf: "/images/certificates/play-it-safe-manage-security-risks.pdf",
    status: "Completed",
  },
  {
    id: 3,
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google",
    description:
      "Covers networking fundamentals, protocols, and network security concepts.",
    pdf: "/images/certificates/connect-and-protect-networks-and-network-security.pdf",
    status: "Completed",
  },
  {
    id: 4,
    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google",
    description:
      "Builds practical skills with Linux command-line tools and SQL for security analysis.",
    pdf: "/images/certificates/tools-of-the-trade-linux-and-sql.pdf",
    status: "Completed",
  },
  {
    id: 5,
    title: "Assets, Threats, and Vulnerabilities",
    issuer: "Google",
    description:
      "Explores organizational assets, threats, vulnerabilities, and security controls.",
    pdf: "/images/certificates/assets-threats-and-vulnerabilities.pdf",
    status: "Completed",
  },
];