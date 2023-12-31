
import { TABS } from '../action/type'

import { useDispatch } from 'react-redux';

import { toggleTab } from "../action/index";


const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        TABS.map(tab => (
            <button
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))} key={tab}
            >
                {tab}
            </button>
        ))
    )
}

export default Tabs;