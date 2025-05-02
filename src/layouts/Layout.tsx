import Header from "@components/commons/Header";

const title = "Bakery NIKORI";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <body>
                <Header title={title}/>
                <main>
                    {children}
                </main>
            </body>
            
        </>
    )
}

export default Layout;