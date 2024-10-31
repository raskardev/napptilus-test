import { Header } from "../features/core/components/header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="my-10">{children}</main>
    </>
  );
};

export default Layout;
