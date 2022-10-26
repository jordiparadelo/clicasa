import React, { useState } from "react";
import Image from "next/image";

const ProcessTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    tabs && (
      <div className="ProcessTab" role="tablist">
        <div className="ProcessTab__header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              role="tab"
              aria-selected={index === activeTab}
              aria-controls={`panel-${index}`}
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
          <Image
            src={tabs[activeTab].image.src}
            width={tabs[activeTab].image.width}
            height={tabs[activeTab].image.height}
            alt={tabs[activeTab].title}
          />
        </div>
      </div>
    )
  );
};

export default ProcessTab;
