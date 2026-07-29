import WindowControls from "../components/WindowControls.jsx";
import WindowWrapper from "../HOC/WindowWrapper.jsx";
import {locations} from "../constants/index.js";
import useLocationStore from "../store/Location.js";
import clsx from "clsx";
import useWindowStore from "../store/Window.js";

const Finder = () => {
    const { openWindow } = useWindowStore()
    const {activeLocation, setActiveLocation} = useLocationStore()

    const openItem = (item) => {
        if(item.fileType === 'pdf') return openWindow("resume")
        if(item.kind === 'folder') return setActiveLocation(item)
        if(['fig', 'url'].includes(item.fileType) && item.href) return window.open(item.href, '_blank')
    }

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={clsx(item.id === activeLocation.id ? 'active' : 'not-active')}
                        onClick={() => setActiveLocation(item)}
                    >
                        <img src={item.icon} className="w-4" alt={item.name}/>
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder"/>
                <h2>Tech Stack</h2>
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList("Favorites", Object.values(locations))}
                    {renderList("Work", locations.work.children)}
                </div>
                <ul className="content">
                    {activeLocation?.children.map((item) => (
                        <li
                            key={item.id}
                            className={`${item.position} cursor-pointer`}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name}/>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow;