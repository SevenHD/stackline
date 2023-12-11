import mockData from "../mockdata/MockData.json";
import { Item } from "../store/slices/itemSlice";

//Use setTimeout to create a function simulate the asynchronous nature of a request
export const fetchData = async (): Promise<Item[]> => {
    return new Promise<Item[]>((resolve) => {
        setTimeout(() => {
            resolve(mockData);
        }, 2000);
    });
};

//Add a comma to every 3 digits to given numbers in the table of List componenet
export const addCommasToNumber = (num: number): string => {
    const formattedNumber = `$${num.toLocaleString()}`;
    return formattedNumber;
}