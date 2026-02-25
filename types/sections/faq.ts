export interface IFAQItem {
    question: string;
    answer: string;
}

export interface IFAQSection {
    title: string;
    items: IFAQItem[];
}
