import './dropdown.style.css';
import * as React from 'react';
import { IDropdownProps } from './dropdown.props';
import { useSpring, animated } from 'react-spring';

const Dropdown = ({ items, placeholder }: IDropdownProps) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState();

    const fade = useSpring({
        opacity: isOpen ? 1 : 0,
        height: isOpen ? items.length * 35 : 0,
        config: { duration: 200 }
    });

    return (
        <>
            <div className={"dropdown-container"}>
                <div className="dropdown" onClick={() => setIsOpen(prevState => !prevState)}>
                    <div className={"dropdown__placeholder"} style={selectedItem ? { color: '#000' } : { color: '#777' }}>
                        {selectedItem ? selectedItem.title : placeholder}
                    </div>
                    <div className={"dropdown__arrow"}>
                        <i className={"fas fa-chevron-down"} style={isOpen ? { transform: 'rotate(180deg)' } : undefined}></i>
                    </div>
                </div>
                {<animated.div className={"dropdown__items"} style={fade}>
                    {items.map((item) => <div onClick={() => (setSelectedItem(item), setIsOpen(false))} key={item.id} className={"dropdown__items__item"}>{`${item.id} - ${item.title}`}</div>)}
                </animated.div>}
            </div>
        </>
    );
}

export default Dropdown;