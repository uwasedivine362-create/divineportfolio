import { motion } from "framer-motion";

function Skills(){

const skills=[
{name:"Financial Reporting",level:90},
{name:"QuickBooks",level:85},
{name:"Excel",level:90},
{name:"Data Analysis",level:80},
{name:"HTML",level:75},
{name:"C++",level:70},
{name:"Cybersecurity",level:75}
]

return(

<section id="skills">

<h2>Professional Skills</h2>

{skills.map((skill,index)=>(

<div key={index} className="skill">

<p>{skill.name}</p>

<div className="bar">

<motion.div
className="progress"
initial={{width:0}}
animate={{width:`${skill.level}%`}}
transition={{duration:1}}
/>

</div>

</div>

))}

</section>

)

}

export default Skills