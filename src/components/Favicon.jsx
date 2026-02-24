import { useEffect } from 'react';

const Favicon = () => {
  useEffect(() => {
    // Ultra-compact version
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'%3E%3Cpath d='M220-180q-58 0-99-41t-41-99q0-58 41-99t99-41q29 0 55 11.5t45 32.5l119-68q-3-12-4.5-24t-1.5-24q0-44 15.5-83t43.5-69l-71-71q-10 8-22 12.5t-25 4.5q-33 0-56.5-23.5T290-760q0-33 23.5-56.5T370-840q33 0 56.5 23.5T450-760q0 12-3.5 23.5T436-714l72 72q30-26 67-42t77-16q44 0 83 15.5t69 43.5l71-71q-8-10-12.5-22t-4.5-25q0-33 23.5-56.5T920-840q33 0 56.5 23.5T1000-760q0 33-23.5 56.5T920-680q-12 0-23.5-3.5T874-696l-71 71q26 30 41.5 68.5T860-470q0 44-15.5 83T803-318l71 71q10-8 22-12.5t25-4.5q33 0 56.5 23.5T1000-200q0 33-23.5 56.5T920-120q-33 0-56.5-23.5T840-200q0-12 3.5-23.5T856-246l-72-72q-30 26-68 41.5T630-260q-44 0-83-15.5T478-318l-119 69q3 11 4.5 22.5T365-200q0 58-41 99t-99 41Z' fill='%236dacd9'/%3E%3C/svg%3E";
    document.head.appendChild(link);
  }, []);

  return null;
};

export default Favicon;