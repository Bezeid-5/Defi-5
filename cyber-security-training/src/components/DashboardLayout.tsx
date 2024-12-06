"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import styles from "./DashboardLayout.module.css";
import modules from "../data/modules"; 

const DashboardLayout: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (modules.length > 0 && modules[0].subtitles.length > 0) {
      setSelectedTitle(modules[0].subtitles[0].name); 
      setContent(modules[0].subtitles[0].content); 
    }
  }, []);

  const handleSelectContent = (title: string, content: string) => {
    setSelectedTitle(title);
    setContent(content);
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar onSelectContent={handleSelectContent} />
      <main className={styles.main}>
        <h1>{selectedTitle }</h1>
        <p>{content }</p>
      </main>
    </div>
  );
};

export default DashboardLayout;
