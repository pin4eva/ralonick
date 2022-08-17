import Link from "next/link"
import React from "react"

//====Products Data====
export const Options=
    [
        {
            id: 1,
            name: "Quality",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis fermentum sapien sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est sit vitae urna.",
       
        },
        {
            id: 1,
            name: "Integrity",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis fermentum sapien sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est sit vitae urna.",
       
        },
        {
            id: 4,
            name: "Safety",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis fermentum sapien sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est sit vitae urna.",
       
        },
        {
            id: 3,
            name: "Professionalism",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis fermentum sapien sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est sit vitae urna.",
       
        }
        
    ]
    export const Research=[
        {
            id:1,
            img:<img src={"/images/Frame44.png"} className="" alt=""></img>,
            header:"Chemical Research",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus. Proin scelerisque sed massa arcu nunc id ridiculus purus cursus. Luctus dolor et consequat nunc at ut."
        },
        {
            id:2,
            img: <img src={"/images/Frame46.png"} alt=""></img>,
            header:"Chemical Research",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus. Proin scelerisque sed massa arcu nunc id ridiculus purus cursus. Luctus dolor et consequat nunc at ut."
        },
        {
            id:3,
            img:<img src={"/images/Frame45.png"} className="" alt=""></img>,
            header:"Chemical Research",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus. Proin scelerisque sed massa arcu nunc id ridiculus purus cursus. Luctus dolor et consequat nunc at ut."
        }
    ]
export const Project=[
    {
        id:1,
        name:"Project Name",
content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus.",
link:<Link href="/">More Details</Link>,
imglink:<Link href="/"><img src={("./images/Vector2.png")} alt=""></img></Link>
    }
]