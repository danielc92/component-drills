import React, { useState } from "react"
import styled from "styled-components"

const Tabs = styled.section`
  border-radius: 6px;
  max-width: 500px;
`
const TabList = styled.div`
  display: flex;
  justify-content: space-between;
  > *:not(:last-child) {
    margin-right: 8px;
  }
`

const TabListButton = styled.button<{ isSelected: boolean }>`
  width: 100%;
  border-radius: 6px;
  padding: 16px 0px;
  border: none;
  font-size: 16px;

  background-color: ${(p) => (p.isSelected ? "#c4930e" : "#f7edc1")};
  color: ${(p) => (p.isSelected ? "#fff" : "#000")};
  font-weight: ${(p) => (p.isSelected ? "bold" : "normal")};

  :hover {
    background-color: #c4930e;
  }
`

const TabPanel = styled.div`
  padding: 16px;
  > p {
    font-size: 16px;
    line-height: 24px;
  }
`

const AccessibleTabs: React.FC<IAccessibleTabProps> = ({ tabs }) => {
  if (tabs.length === 0) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setactiveTab] = useState<string>(tabs[0].buttonId)

  return (
    <Tabs className="tabs">
      <TabList role="tablist">
        {/* Render the tab buttons */}
        {tabs.map((t) => (
          <TabListButton
            isSelected={activeTab === t.buttonId}
            onClick={() => setactiveTab(t.buttonId)}
            role="tab"
            aria-selected={activeTab === t.buttonId ? "true" : "false"}
            aria-controls={t.buttonId}
            id={t.buttonId}
          >
            {t.buttonText}
          </TabListButton>
        ))}
      </TabList>

      {/* Render the tab panels */}
      {tabs.map((t) => (
        <TabPanel
          role="tabpanel"
          hidden={activeTab !== t.buttonId}
          aria-labelledby={t.buttonId}
        >
          <p>{t.panelContent}</p>
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default AccessibleTabs
