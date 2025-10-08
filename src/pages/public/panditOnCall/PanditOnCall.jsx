import React from 'react'
import { templeData, popularPuja } from "../../../store/templeSampleData.js";
import ScrollingTopMarquee from '../../../components/ScrollingTopMarquee.jsx';

const PanditOnCall = () => {
    return (
        <div className="overflow-x-hidden min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex flex-col inset-0 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 to-yellow-200/0">

                <ScrollingTopMarquee pujaData={popularPuja} />



            </section></div>
    )
}

export default PanditOnCall