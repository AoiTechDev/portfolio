import Footer from "@/components/Footer";
import TranslationsProvider from "@/components/Providers/TranslationProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../../components/Navbar";
import "../globals.css";
import initTranslations from "../i18n";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "100", "300", "400", "500", "600", "700", "800", "900"],
});

const meta: Metadata = {
  title: "Paweł Bornikowski | Front-end Developer",

  description:
    "Front-end developer with 2 years of experience and strong passion for creating interfaces.",
  authors: [
    {
      name: "Paweł Bornikowski",
      url: "https://www.linkedin.com/in/pbornikowski/",
    },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: "origin-when-cross-origin",
    keywords: [
      "Paweł",
      "Bornikowski",
      "Front-end",
      "Developer",
      "Next.js",
      "TailwindCSS",
      "React",
      "Typescript",
      "Web Development",
      "Front-end Developer",
    ],
    authors: [
      {
        name: "Paweł Bornikowski",
        url: "https://www.linkedin.com/in/pbornikowski/",
      },
    ],

    creator: "Paweł Bornikowski",
    publisher: "Paweł Bornikowski",
  };
}

const i18nNamespaces = [
  "Home",
  "home",
  "about",
  "common",
  "mealfulness",
  "projects",
  "skills",
  "wiredwave",
  "footer",
  "aifred",
  "clearflow",
  "contact",
];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <html style={{ scrollBehavior: "smooth" }} lang={locale}>
        <body className={`${inter.className} bg-background`}>
          <Navbar />

          {/* <div id="burger"></div>
          <div id="menu"></div> */}

          {children}
          <Footer />
        </body>
      </html>
    </TranslationsProvider>
  );
}
