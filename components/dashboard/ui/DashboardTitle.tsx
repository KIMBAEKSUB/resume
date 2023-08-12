export interface DashboardTitleProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    href?: string;
    className?: string;
}

const DashboardTitle: React.FC<DashboardTitleProps> = ({ title, subtitle, href }) => {
    return (
        <>
            <h1 className="title is-2">
                <span>
                    {title}
                </span>
                {href && <a className="button is-ghost p-1 mx-2 has-text-weight-normal" style={{ height: "auto" }} href={href} target="_self">more</a>}
            </h1>
            {subtitle && <h2 className="subtitle is-4">{subtitle}</h2>}
        </>
    );
}

export default DashboardTitle;