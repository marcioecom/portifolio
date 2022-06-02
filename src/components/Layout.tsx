import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      { children }
    </>
  )
}
