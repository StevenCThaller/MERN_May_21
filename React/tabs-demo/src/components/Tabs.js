import { useState } from 'react'

const Tabs = props => {
    const { tabs } = props;
    const [active, setActive] = useState(0);

    const clickTab = i => {
        setActive(i);
        if(tabs[i].callback){
            tabs[i].callback();
        }
    }

    return (
        <>
        <div>
            { tabs.map( (tab, i) =><button key={i} className={ `tab ${active === i ? "big-tab" : "tiny-tab"}` } onClick={ () => clickTab(i) }>{tab.label}</button> )}
        </div>
        <p>{ tabs[active].content }</p>
        </>
    )
}

export default Tabs
