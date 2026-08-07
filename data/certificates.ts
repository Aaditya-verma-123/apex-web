export interface Certificate {
  id: number;
  slug: string;

  title: string;
  issuer: string;
  description: string;

  image: string;
  pdf: string;

  issued: string;
  credentialId: string;
  verificationUrl: string;

  skills: string[];

  category: "Cybersecurity";
  featured: boolean;

  status: "Completed";
}

export const certificates: Certificate[] = [
  {
    id: 1,
    slug: "foundations-of-cybersecurity",

    title: "Foundations of Cybersecurity",
    issuer: "Google",

    description:
      "Introduces the core concepts of cybersecurity, security principles, common threats, and the role of security professionals.",

    image: "/images/certificates/foundations-of-cybersecurity.webp",
    pdf: "/images/certificates/foundations-of-cybersecurity.pdf",

    issued: "1 June 2026",

    credentialId: "VXXJN3SKFP55",

    verificationUrl:
      "https://coursera.org/verify/VXXJN3SKFP55",

    skills: [
      "Cybersecurity Fundamentals",
      "CIA Triad",
      "Security Operations",
      "Risk Management",
    ],

    category: "Cybersecurity",

    featured: true,

    status: "Completed",
  },

  {
    id: 2,
    slug: "play-it-safe-manage-security-risks",

    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",

    description:
      "Focuses on identifying, assessing, and managing security risks using governance, compliance, and security frameworks.",

    image: "/images/certificates/play-it-safe.webp",
    pdf: "/images/certificates/play-it-safe-manage-security-risks.pdf",

    issued: "9 June 2026",

    credentialId: "X8U3CR83SNRM",

    verificationUrl:
      "https://coursera.org/verify/X8U3CR83SNRM",

    skills: [
      "Risk Assessment",
      "Compliance",
      "Security Controls",
      "NIST Framework",
    ],

    category: "Cybersecurity",

    featured: false,

    status: "Completed",
  },

  {
    id: 3,
    slug: "connect-and-protect-networks-and-network-security",

    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google",

    description:
      "Builds networking knowledge including TCP/IP, network protocols, firewalls, VPNs, and network defense techniques.",

    image: "/images/certificates/connect-and-protect.webp",
    pdf: "/images/certificates/connect-and-protect-networks-and-network-security.pdf",

    issued: "22 June 2026",

    credentialId: "SBSIMMXXLFX0",

    verificationUrl:
      "https://coursera.org/verify/SBSIMMXXLFX0",

    skills: [
      "Networking",
      "TCP/IP",
      "Firewalls",
      "VPN",
      "Network Security",
    ],

    category: "Cybersecurity",

    featured: false,

    status: "Completed",
  },

  {
    id: 4,
    slug: "tools-of-the-trade-linux-and-sql",

    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google",

    description:
      "Developed practical cybersecurity skills using Linux command-line tools and SQL for security investigations and log analysis.",

    image: "/images/certificates/tools-of-the-trade.webp",
    pdf: "/images/certificates/tools-of-the-trade-linux-and-sql.pdf",

    issued: "2 July 2026",

    credentialId: "3I2P7GZT8FNA",

    verificationUrl:
      "https://coursera.org/verify/3I2P7GZT8FNA",

    skills: [
      "Linux",
      "SQL",
      "Command Line",
      "Log Analysis",
      "Security Investigation",
    ],

    category: "Cybersecurity",

    featured: false,

    status: "Completed",
  },

  {
    id: 5,
    slug: "assets-threats-and-vulnerabilities",

    title: "Assets, Threats, and Vulnerabilities",
    issuer: "Google",

    description:
      "Learned how to identify organizational assets, evaluate threats, assess vulnerabilities, and implement effective security controls.",

    image: "/images/certificates/assets-threats.webp",
    pdf: "/images/certificates/assets-threats-and-vulnerabilities.pdf",

    issued: "22 July 2026",

    credentialId: "NBZWWTCX5E8R",

    verificationUrl:
      "https://coursera.org/verify/NBZWWTCX5E8R",

    skills: [
      "Threat Modeling",
      "Vulnerability Assessment",
      "Asset Management",
      "Security Controls",
    ],

    category: "Cybersecurity",

    featured: false,

    status: "Completed",
  },
];