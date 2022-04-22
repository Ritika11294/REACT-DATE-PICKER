import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 



export const Calender = () => {
    const [data, setData] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection"
        }
    ]);

    return (
        <DateRange
            onChange={val => setData([val.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={data}
            direction="horizontal" />

    )
}