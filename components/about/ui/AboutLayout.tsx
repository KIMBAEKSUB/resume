import AboutTabs from "./AboutTabs";

const AboutLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return <div style={{ background: "#F7F8FA", minHeight: "100vh" }}>
        <AboutTabs />
        <div className="container">
            {children}
        </div>
    </div>
}

export default AboutLayout;