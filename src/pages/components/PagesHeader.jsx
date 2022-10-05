import { useEffect, useState } from "react";

const PagesHeader = () => {

    let [header, setHeader] = useState(null);
    let [description, setDescription] = useState(null);
    let [button, setButton] = useState(null);


    useEffect(() => {

        //returns the current url minus the domain name
        const currentPathName = window.location.pathname
        //console.log(currentPathName);

        switch (currentPathName) {
            case '/AboutPage':
                setHeader(header = 'About')
                setDescription(description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nam debitis perspiciatis sunt ad tempore excepturi quasi veritatis quis rerum molestiae ratione, perferendis quibusdam iure fugiat quos, quam possimus quo!')
                // setButton(button = <button className="px-3 py-1 border-solid border-2 border-black hover:scale-110 duration-200   dark:border-white dark:text-white">View Resume</button>)
                setButton(button = <button className="text-xs border border-1 border-black px-4 py-1 dark:border-white hover:scale-110 duration-200  md:text-lg md:px-8 md:py-2 dark:text-white">View Resume</button>)
                break;
            case '/SkillsPage':
                setHeader(header = 'Skills')
                setDescription(description = 'Skills Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nam debitis perspiciatis sunt ad tempore excepturi quasi veritatis quis rerum molestiae ratione, perferendis quibusdam iure fugiat quos, quam possimus quo!')
                break;
            case '/ProjectPage':
                setHeader(header = 'Projects')
                setDescription(description = 'Projects Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nam debitis perspiciatis sunt ad tempore excepturi quasi veritatis quis rerum molestiae ratione, perferendis quibusdam iure fugiat quos, quam possimus quo!')
                break;
            case '/ContactPage':
                setHeader(header = 'Contacts')
                setDescription(description = 'Contacts Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nam debitis perspiciatis sunt ad tempore excepturi quasi veritatis quis rerum molestiae ratione, perferendis quibusdam iure fugiat quos, quam possimus quo!')
                break;
        }

    }, [])

    return (
        <>
            <div className="w-11/12 mx-auto bg-gray-300 dark:bg-[#272829]">

                <div className="w-11/12 mx-auto  flex flex-col py-4 gap-5">
                    <h1 className="font-bold text-6xl md:text-8xl  dark:text-white">{header}</h1>

                    <p className="dark:text-white text-md">{description}</p>

                    <div>
                        {button}
                    </div>
                </div>

            </div>
        </>
    );
}

export default PagesHeader;