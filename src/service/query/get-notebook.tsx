"use server";

const url = process.env.APP_URL;

interface notebookType {
    img: string;
    title: string;
    brand: string;
    price: string;
    color: string;
    ram: string;
    geForce: string;
    core: string;
    display: string;
    memory: string;
    weight: string;
    id: number;
}

export const GetNotebook = async (): Promise<notebookType[]> => {
    try {
        const res = await fetch(`${url}/banners`);
        const data: notebookType[] = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching banners:', error);
        return [];
    }
};
