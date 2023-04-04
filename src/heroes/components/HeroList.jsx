import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";


export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);


  return (
   <div className="row rows-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
    {
        heroes.map((heroe)=>{
            return (
                <HeroCard 
                    key={heroe.id}
                    { ...heroe }
                />
                
            ) 
        })
    }
   </div>
  )
}
