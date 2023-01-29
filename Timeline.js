class Timeline {
    constructor(month, year) {
        this.month = month;
        this.year = year;
    }

    // method to return the array of each section  

    Timeflow(prov) {    
        if (prov == 1) {
            var PubMon = this.month + 6
            var PubYear = this.year + 1

            if (PubMon > 12) {
                PubYear += 1;
                PubMon -= 12;
            }

            var examReqMon = PubMon + 6;
            var examReqYear = PubYear + 2;

            if (examReqMon > 12) {
                examReqYear += 1;
                examReqMon -= 12;
            }

            var FERMon = examReqMon + 9;
            var FERyear = examReqYear + 1;

            if (FERMon > 12) {
                FERyear += 1;
                FERMon -= 12;
            }
            var ResMon = FERMon + 6;
            var ResYear = FERyear;
            if (ResMon > 12) {
                ResYear += 1;
                ResMon -= 12;
            }
        }
        return ([[PubMon, PubYear], [examReqMon, examReqYear], [FERMon, FERyear], [ResMon, ResYear]]);
    }
}

const timeline1 = new Timeline(1, 2023)
console.log(timeline1.Timeflow(1))   
