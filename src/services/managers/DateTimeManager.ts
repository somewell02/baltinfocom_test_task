class DateTimeManager {
    static calculateAge(dateString: string): number {
        const day = parseInt(dateString.split(".")[0]);
        const month = parseInt(dateString.split(".")[1]);
        const year = parseInt(dateString.split(".")[2]);
        const bdate = new Date(year, month, day);

        const ageDate = new Date(Date.now() - bdate.getTime());
        // console.log(dateString)
        // console.log(bdate)
        // console.log(ageDate)
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

export default DateTimeManager