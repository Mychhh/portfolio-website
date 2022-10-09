import HTML from '../../img/HTML.png'
import CSS from '../../img/CSS.png'
import JS from '../../img/JS.png'
import PHP from '../../img/php.png'
import JAVA from '../../img/Java.jfif'
import Csharp from '../../img/Csharp.jfif'

import BootsStrap from '../../img/Bootstrap.png'
import ChakraUI from '../../img/ChakraUI.png'
import Tailwind from '../../img/Tailwind.png'

import ReactJS from '../../img/React.png'  
import AlpineJS from '../../img/AlpineJS.png'    
import Laravel from '../../img/Laravel.png'  

import MySQL from '../../img/MySQL.jpg'
import MsSQL from '../../img/MsSQL.jpg'

import Github from '../../img/Github.jpg'
import Notion from '../../img/Notion.jpeg'
import Figma from '../../img/Figma.jfif'

import { useState } from 'react'

import StackComponent from './StackComponent'
import LibrariesFrameworks from './LibrariesFrameworks'
import Database from "./Database";
import OtherTools from "./OtherTools";

const TechStacks = () => {

    const [stacks, setStacks] = useState(
        [
            {id: 1, name: 'HTML', img: HTML},
            {id: 2, name: 'CSS', img: CSS },
            {id: 3, name: 'JS', img: JS },
            {id: 4, name: 'PHP', img: PHP },
            {id: 5, name: 'JAVA', img: JAVA },
            {id: 6, name: 'C#', img: Csharp },
        ]
    );

    const [libraFrame, setLibraFrame] = useState(
        [
            {id: 1, name: 'Bootstrap', img: BootsStrap},
            {id: 2, name: 'Chakra UI', img: ChakraUI },
            {id: 3, name: 'Tailwind CSS', img: Tailwind },
            {id: 4, name: 'React JS', img: ReactJS },
            {id: 5, name: 'Alpine JS', img: AlpineJS },
            {id: 6, name: 'Laravel', img: Laravel },
        ]
    );

    const [dataBase, setDataBase] = useState(
        [
            {id: 1, name: 'MySQL', img: MySQL},
            {id: 2, name: 'MsSQL', img: MsSQL },
        ]
    );

    const [otherTools, setOtherTools] = useState(
        [
            {id: 1, name: 'Github', img: Github},
            {id: 2, name: 'Notion', img: Notion },
            {id: 3, name: 'Figma', img: Figma },
        ]
    );

    return (
        <>
            {/* Create a local server for technology stack data that will map an object based on their property */}

            <div className="w-10/12 mx-auto py-5 dark:text-white">

                {/* props */}
                <StackComponent stacks={stacks} header="Technology Stacks"/>
                <LibrariesFrameworks libraFrame={libraFrame} header="Libraries & Frameworks"/>
                <Database dataBase={dataBase} header="Databases"/>
                <OtherTools otherTools={otherTools} header="Other tools"/>

            </div>

        </>
    );
}

export default TechStacks;