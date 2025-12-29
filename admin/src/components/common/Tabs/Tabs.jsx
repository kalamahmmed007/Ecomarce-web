import React, { useState } from "react";

const Tabs = ({ children, defaultIndex = 0, className = "" }) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const tabs = React.Children.toArray(children).filter(child => child.type.name === "Tab");

    return (
        <div className={className}>
            <div className="flex mb-4 border-b">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`px-4 py-2 -mb-px border-b-2 ${idx === activeIndex ? "border-blue-500 text-blue-500" : "border-transparent text-gray-600"
                            }`}
                    >
                        {tab.props.label}
                    </button>
                ))}
            </div>
            <div>{tabs[activeIndex]}</div>
        </div>
    );
};

export default Tabs;
