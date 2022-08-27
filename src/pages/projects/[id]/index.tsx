import React from "react";
import { Project1, Projects } from "../../../components/Data";
import { useRouter } from "next/router";
import FrontLayout from "../../../layouts/front.layout";
function SingleProjects(){
    const router=useRouter();
    const {id} = router.query;
    return(
       
        <FrontLayout>
        <div>
            {Projects.map((item)=>{
                return(
                    <div key={item.id}>
             
                        {item.header}
                    </div>
                )
            })}
        </div>
        </FrontLayout>
    )
}
export default SingleProjects