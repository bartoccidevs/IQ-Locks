export default function PageHeader({ title="Page Title" }) {
    return (
        <div>
            <h1 className="text-4xl md:text-6xl font-bold py-4 inline-padding md:pb-4 text-theme-text-contrast
        bg-theme-background dark:bg-theme-background-dark">{title}</h1>
        </div>
    )
}