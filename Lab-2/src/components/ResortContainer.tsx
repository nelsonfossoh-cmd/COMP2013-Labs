import ResortCards from "./ResortCards";
import type { ResortListing } from "../data/data";

interface ResortContainerProps {
    data: ResortListing[];
} 

export default function ResortContainer({data}: ResortContainerProps)
{
    return (
        <div className = "ResortContainer">
            {data.map((resort) => (
                <ResortCards key={resort.id} {...resort} />
            ))}
        </div>
    )
}