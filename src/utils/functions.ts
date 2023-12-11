import mockData from "../mockdata/MockData.json";
import { Item } from "../store/slices/itemSlice";

export const fetchData = async (): Promise<Item[]> => {
    return new Promise<Item[]>((resolve) => {
        setTimeout(() => {
            resolve(mockData);
        }, 2000);
    });
};

export const addCommasToNumber = (num: number): string => {
    const formattedNumber = `$${num.toLocaleString()}`;
    return formattedNumber;
}