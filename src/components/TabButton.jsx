export default function TabButton({children, onSelect, isSelected}) {

    /*
    function handleClick(ev) {
        console.log('Hello World');
        console.log(ev);
    }
    */

    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}