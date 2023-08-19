export interface AboutTitleProps {
    title: string;
    subtitle: string;
}

const AboutTitle: React.FC<AboutTitleProps> = ({ title, subtitle }) => {
    return <>
        <section className="section">
            <h1 className="title is-2 is-spaced has-text-centered" style={{ color: "#181B38" }}>{title}</h1>
            <p className="subtitle has-text-centered" style={{ color: "#181B38" }}>{subtitle}</p>
        </section>
    </>
}

export default AboutTitle;