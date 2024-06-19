import { Footer } from "./Footer";
import { Header } from "./header/Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
