import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import AIAssistant from '@/components/AIAssistant';
import Dashboard from '@/pages/Dashboard';
import StudyPack from '@/pages/StudyPack';
import Settings from '@/pages/Settings';
import UnitTest from '@/pages/UnitTest';
import { useAppStore } from '@/stores/appStore';
import '@/styles/globals.css';

function App() {
  const { theme, isLoading } = useAppStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="flex h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content */}
          <main className="flex-1 overflow-y-auto">
            {isLoading && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-pink-300 border-t-pink-600 rounded-full animate-spin"></div>
                  <p className="text-gray-600">Loading...</p>
                </div>
              </div>
            )}

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/study/:subjectId/:lessonId" element={<StudyPack />} />
              <Route path="/test/:testId" element={<UnitTest />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>

        {/* Right AI Assistant Panel */}
        <AIAssistant />
      </div>
    </Router>
  );
}

export default App;
