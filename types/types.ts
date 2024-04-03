export type ProjectSectionType = {
    title: string;
    stack: string[];
    year: string;
    description: string;
    links: { label: string; href: string }[];
    image: React.ReactNode;
    order: number;
    back?: React.ReactNode | undefined;
    details?: React.JSX.Element | undefined;
}