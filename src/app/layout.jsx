import "./globals.css";
import { NavbarContainer } from '@/components/utility/container/Container';
import Header from '@/components/home/header/Header';

export const metadata = {
  title: "Hussain Amet Portfolio",
  description: "Hussain Amet Web Developer, Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`leading-none text-[var(--white)] pb-8`}>
        <NavbarContainer>
          <Header />
        </NavbarContainer>
          {children}
      </body>
    </html>
  );
}
