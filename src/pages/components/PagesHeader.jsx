import { useEffect, useState } from "react";

const PagesHeader = () => {

    let [header, setHeader] = useState(null);
    let [description, setDescription] = useState(null);
    let [button, setButton] = useState(null);
    let [github, setGithub] = useState(null);
    let [git, setGit] = useState(null);


    useEffect(() => {

        //returns the current url minus the domain name
        const currentPathName = window.location.pathname
        //console.log(currentPathName);

        switch (currentPathName) {
            case '/AboutPage':
                setHeader(header = 'About')
                setDescription(description = 'Hi! Im a full-stack web developer. I work on projects like School Registration System and Resource Website. Im also doing basic desktop application. I like coding and building projects that will solve peoples problem.')
                setButton(button = <a href="https://drive.google.com/file/d/1mTaBpDJDKRIHPoNm9Me4qLGbH4prDieS/view?usp=sharing" target="_blank"><button className='text-xs bg-black px-4 py-1 text-white border border-1 border-black  hover:scale-110 duration-200 dark:bg-white dark:border-white dark:text-black md:text-lg md:px-8 md:py-2'>View Resume</button></a>)
                break;
            case '/SkillsPage':
                setHeader(header = 'Skills')
                setDescription(description = 'This are the tech stacks I used, since I started coding and building real world projects. HTML, CSS, JavaScript, and PHP for Web Development. C# for Desktop Application. Java for some console project since this is my first programming language that I learnt. Im also using some Frameworks and Libraries to speed of my development and also other tools that will help me to achieve my desired project.')
                break;
            case '/ProjectPage':
                setHeader(header = 'Projects')
                setDescription(description = 'This are some projects that I built that has live links. But I also have some projects in Java and C# that you can check in my ')
                setGithub(github = 'https://github.com/Mychhh')
                setGit(git = 'Github repositories')
                
                break;
            case '/ContactPage':
                setHeader(header = 'Contacts')
                setDescription(description = 'This is my contacts and you can reach me out in many ways. Below is my phone number and email. You can also direct message me if you want, book a meeting so we can talk about your thoughts')
                break;
        }

    }, [])

    return (
        <>
            <div className="w-11/12 mx-auto bg-gray-300 dark:bg-[#272829]">

                <div className="w-11/12 mx-auto  flex flex-col py-4 gap-5">
                    <h1 className="pages-header font-bold text-4xl md:text-8xl  dark:text-white">{header}</h1>

                    <div className="inline">
                        <p className="dark:text-white text-sm md:text-lg inline">{description}</p>
                        <p className="dark:text-white border-b dark:border-white border-black inline"><a href={github} target="_blank" rel="noopener noreferrer">{git}</a></p>
                    </div>

                    <div>
                        {button}
                    </div>
                </div>

            </div>
        </>
    );
}

export default PagesHeader;