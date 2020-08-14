import React, { useState } from "react"
import styled from "styled-components"

const Tabs = styled.section`
  border-radius: 6px;
  max-width: 500px;
`
const TabList = styled.div`
  display: flex;
  justify-content: space-between;
`

interface ITabListButtonProps {
  isSelected: boolean
}
const TabListButton = styled.button<ITabListButtonProps>`
  width: 100%;
  padding: 16px 0px;
  font-size: 16px;
  transition: 0.1s ease;
  outline: ${(p) => (p.isSelected ? "none" : "")};
  border-bottom: ${(p) => (p.isSelected ? "none" : "2px solid #000")};
  border-left: ${(p) => (p.isSelected ? "2px solid #000" : "none")};
  border-right: ${(p) => (p.isSelected ? "2px solid #000" : "none")};
  border-top: ${(p) =>
    p.isSelected ? "4px solid #34eb" : "4px solid #f4f4f4"};
  background-color: ${(p) => (p.isSelected ? "#fff" : "#f4f4f4")};
  color: ${(p) => (p.isSelected ? "#000" : "#000")};
  font-weight: ${(p) => (p.isSelected ? "bold" : "normal")};

  :hover {
    color: #34eb;
  }
`

const TabPanel = styled.div`
  padding: 16px;
  > p {
    font-size: 16px;
    line-height: 24px;
  }

  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
`

const AccessibleTabs: React.FC<IAccessibleTabProps> = ({
  tabs,
  tabsDescription,
}) => {
  // eslint-disableext-line react-hooks/rules-of-hooks
  const [activeTab, setactiveTab] = useState<string>(tabs[0].buttonId)

  return (
    <Tabs className="tabs">
      <TabList role="tablist" aria-label={tabsDescription}>
        {/* Render the tab buttons */}
        {tabs.map((tab) => (
          <TabListButton
            isSelected={activeTab === tab.buttonId}
            onClick={() => setactiveTab(tab.buttonId)}
            role="tab"
            aria-selected={activeTab === tab.buttonId ? "true" : "false"}
            aria-controls={tab.tabPanelId}
            id={tab.buttonId}
            tabIndex={0}
          >
            {tab.buttonText}
          </TabListButton>
        ))}
      </TabList>

      {/* Render the tab panels */}
      {tabs.map((tab) => (
        <TabPanel
          tabIndex={0}
          role="tabpanel"
          hidden={activeTab !== tab.buttonId}
          id={tab.tabPanelId}
          aria-labelledby={tab.buttonId}
        >
          <p>{tab.panelContent}</p>
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default AccessibleTabs
