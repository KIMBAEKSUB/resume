import AppNavigation from "./navigation/AppNavigation";

const AppLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <>
        <AppNavigation />
        {children}
    </>
}

export default AppLayout;