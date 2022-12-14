import HTML from '../../img/HTML.webp'
import CSS from '../../img/CSS.webp'
import JS from '../../img/JS.webp'
import PHP from '../../img/php.webp'
import JAVA from '../../img/Java.webp'
import Csharp from '../../img/Csharp.webp'

import BootsStrap from '../../img/Bootstrap.webp'
import ChakraUI from '../../img/ChakraUI.webp'
import Tailwind from '../../img/Tailwind.webp'

import ReactJS from '../../img/React.webp'  
import AlpineJS from '../../img/AlpineJS.webp'    
import Laravel from '../../img/Laravel.webp'  

import MySQL from '../../img/MySQL.webp'
import MsSQL from '../../img/MsSQL.webp'

import Github from '../../img/Github.webp'
import Notion from '../../img/Notion.webp'
import Figma from '../../img/Figma.webp'
import Postman from '../../img/postman.webp'

import { useState } from 'react'

import StackComponent from './StackComponent'
import LibrariesFrameworks from './LibrariesFrameworks'
import Database from "./Database";
import OtherTools from "./OtherTools";

const TechStacks = () => {

    const [stacks, setStacks] = useState(
        [
            {id: 1, name: 'HTML', img: HTML, link: 'https://www.w3schools.com/html/default.asp'},
            {id: 2, name: 'CSS', img: CSS, link: 'https://web.dev/learn/css/' },
            {id: 3, name: 'JS', img: JS, link: 'https://www.w3schools.com/js/default.asp'},
            {id: 4, name: 'PHP', img: PHP, link: 'https://www.php.net/' },
            {id: 5, name: 'JAVA', img: JAVA, link: 'https://www.tutorialspoint.com/java/java_documentation.htm' },
            {id: 6, name: 'C#', img: Csharp, link: 'https://www.tutorialspoint.com/csharp/index.htm' },
        ]
    );

    const [libraFrame, setLibraFrame] = useState(
        [
            {id: 1, name: 'Bootstrap', img: BootsStrap, link: 'https://getbootstrap.com/docs/5.2/getting-started/introduction/'},
            {id: 2, name: 'Chakra UI', img: ChakraUI, link: 'https://chakra-ui.com/getting-started' },
            {id: 3, name: 'Tailwind CSS', img: Tailwind, link: 'https://tailwindcss.com/docs/installation' },
            {id: 4, name: 'React JS', img: ReactJS, link: 'https://reactjs.org/docs/getting-started.html' },
            {id: 5, name: 'Alpine JS', img: AlpineJS, link: 'https://alpinejs.dev/' },
            {id: 6, name: 'Laravel', img: Laravel, link: 'https://laravel.com/docs/9.x' },
        ]
    );

    const [dataBase, setDataBase] = useState(
        [
            {id: 1, name: 'MySQL', img: MySQL, link: 'https://www.w3schools.com/sql/default.asp' },
            {id: 2, name: 'MsSQL', img: MsSQL, link: 'https://www.w3schools.com/sql/default.asp'  },
        ]
    );

    const [otherTools, setOtherTools] = useState(
        [
            {id: 1, name: 'Github', img: Github, link: 'https://github.com/Mychhh'},
            {id: 2, name: 'Notion', img: Notion, link: 'https://www.notion.so/' },
            {id: 3, name: 'Figma', img: Figma, link: 'https://www.figma.com/downloads/' },
            {id: 4, name: 'Postman', img: Postman, link: 'https://www.postman.com/' },
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