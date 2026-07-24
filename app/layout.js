import { Instrument_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://flavingimenes.github.io";
const TITLE = "FG Dev_";
const DESCRIPTION =
  "Desenvolvedor front-end especializado em Landing Pages e sites institucionais rápidos, modernos e feitos para converter. Atendimento para clientes no Brasil, EUA, Canadá e Europa.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Flávio Gimenes" }],
  robots: { index: true, follow: true },
  icons: { icon: "/imgs/FlavioIcon.png" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    locale: "pt_BR",
    images: ["/imgs/FGImg.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/imgs/FGImg.jpeg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Flávio Gimenes",
  alternateName: "Flávio Gabriel",
  jobTitle: "Desenvolvedor Front-end",
  url: SITE_URL,
  image: `${SITE_URL}/imgs/FGImg.jpeg`,
  email: "mailto:gflavio581@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Várzea Grande",
    addressRegion: "MT",
    addressCountry: "BR",
  },
  sameAs: [
    "https://github.com/flavingimenes",
    "https://www.linkedin.com/in/flaviogimeness",
    "https://www.instagram.com/flavio_gabrielll/",
  ],
  knowsAbout: ["Landing Pages", "React", "Next.js", "TypeScript", "React Native", "UI/UX Design", "CRO"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${instrumentSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
