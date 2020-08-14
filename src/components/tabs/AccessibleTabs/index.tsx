import React, { useState } from "react"
import styled from "styled-components"

const Tabs = styled.section`
  max-width: 500px;
  border: 1px solid #f3f3f3;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const TabList = styled.div`
  display: flex;
  justify-content: space-between;
`

interface ITabListButtonProps {
  isSelected: boolean
}

const TabListButton = styled.button<ITabListButtonProps>`
  &[aria-selected="true"] {
    outline: none;
    font-weight: bold;
    background-color: #fff;
  }

  :focus,
  :active {
    outline: dotted 1px #34eb;
    z-index: 1;
  }

  outline: none;
  width: 100%;
  padding: 16px 0px;
  font-size: 16px;

  transition: 0.1s ease;
  border: none;
  background-color: #ededed;
  :hover {
    color: #34eb;
  }
`

const TabPanel = styled.div`
  padding: 24px;
  > p {
    margin: 0;
    font-size: 16px;
    line-height: 26px;
  }

  :focus,
  :active {
    outline: dotted 1px #34eb;
  }
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
