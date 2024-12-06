import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import modules from "../data/modules"; // استيراد البيانات

interface SidebarProps {
  onSelectContent: (title: string, content: string) => void; // تحديث التوقيع
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectContent }) => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const handleModuleClick = (moduleId: number) => {
    setActiveModule(moduleId === activeModule ? null : moduleId);
  };

  return (
    <div className={styles.sidebar}>
      {modules.map((module) => (
        <div key={module.id} className={styles.module}>
          <div
            className={styles.moduleTitle}
            onClick={() => handleModuleClick(module.id)}
          >
            {module.name}
          </div>
          {activeModule === module.id && (
            <ul className={styles.subtitles}>
              {module.subtitles.map((subtitle) => (
                <li
                  key={subtitle.id}
                  className={styles.subtitle}
                  onClick={() =>
                    onSelectContent(subtitle.name, subtitle.content)
                  }
                >
                  {subtitle.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
