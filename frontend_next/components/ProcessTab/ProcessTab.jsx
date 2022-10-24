import React, { useState } from "react";
import Image from "next/image";

const ProcessTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    tabs && (
      <div className="ProcessTab">
        <div className="ProcessTab__header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              aria-selected={index === activeTab}
            >
              <span className="tab-index">{index + 1}</span>
              <div className="tab-content">
                <h3 className="tab-title">{tab.title}</h3>
                <p className="tab-description">{tab.description}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="ProcessTab__panel">
          <Image {...tabs[activeTab].image} alt={tabs[activeTab].title} />
        </div>
      </div>
    )
  );
};

export default ProcessTab;
