function ExtractDate (currentData, index) {

    let idx = index;
        let currentDate = currentData.list[idx].dt_txt;
    
        let year = currentDate.substring(0,4);
        let month = currentDate.substring(5,7);
        let day = currentDate.substring(8,10);
    
        let date = day+"/"+month+"/"+year;
    
         return date;
}

export default ExtractDate;