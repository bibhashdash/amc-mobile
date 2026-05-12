import {searchResults} from "@/utils/data";

export const getData = (range: string) => {
    return searchResults[range]
}