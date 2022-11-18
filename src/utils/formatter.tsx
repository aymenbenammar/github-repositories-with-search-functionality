import dayjs from "dayjs"
/**
 * ùthis function change Date format to DD MM YYYY 
 * @param ISO String with general date format
 * @returns DD MM YYYY Date format
 */
export function joinedDate(ISO: string): string {
    const date = dayjs(ISO);
    const formateDate = `Joined ${date.format("DD MM YYYY")}`

    return formateDate;
}