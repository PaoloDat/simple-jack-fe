import Head from "next/head";

const MainLayout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>

        </>
    );
};

export default MainLayout;
