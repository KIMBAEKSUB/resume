import AppFooter from "./footer/AppFooter";
import AppHeader from "./header/AppHeader";

const AppLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <>
        <AppHeader />
        {children}
        <AppFooter />
    </>
}

export default AppLayout;