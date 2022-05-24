import React, {useState, FC} from "react";


interface DropDownMenuProps {
    //boolean to always open ddm (for presentation)
    forceOpen?: boolean;
    label?: string;
    withDivider?: boolean;
    icon?: JSX.Element;
    items: DDMItem[];
    variant: string;
    // styles: String
}

export interface DDMItem {
    icon?: JSX.Element;
    label: string;
    desc?: string;
    link?: string;
}


const styles = {
    'withBg': 'bg-ncgx-green text-white font-bold rounded-md',
    'noBg': 'bg-white text-gray-600 font-bold',
    'searchDdm': 'font-light bg-white text-gray-600 font-medium flex-1 w-40'
}

const DropDownMenu:FC<DropDownMenuProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    // @ts-ignore
                    className={` ${styles[props.variant]} flex items-center justify-center rounded-md px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500`}
                    id="options-menu"
                >

                    {props.label}

                    <span className="ml-3">{props.icon}</span>
                    
                </button>
            </div>

            {(props.forceOpen || isOpen) && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-red-900 dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div
                        className={`py-1 ${props.withDivider ? 'divide-y divide-gray-100' : ''}`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {props.items.map((item) => {
                            return (
                                <a
                                    key={item.label}
                                    href={item.link || '#'}
                                    className={`${
                                        item.icon ? 'flex items-center' : 'block'
                                    } block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600`}
                                    role="menuitem"
                                >
                                    {item.icon}

                                    <span className="flex flex-col">
                                        <span>{item.label}</span>
                                        {item.desc && <span className="text-gray-400 text-xs">{item.desc}</span>}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};





export default DropDownMenu