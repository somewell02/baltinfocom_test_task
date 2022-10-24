class DateTimeManager {
    static calculateAge(dateString: string): number {
        const bdate = new Date(dateString);
        const ageDate = new Date(Date.now() - bdate.getTime());
        console.log(dateString, bdate, ageDate)
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

export default DateTimeManager