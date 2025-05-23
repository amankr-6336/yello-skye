'use client';
import React, { useState, useEffect } from 'react';
import styles from './Seacrbar.module.css';

export default function SearchBar({ projects, onSearchResults }) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query.toLowerCase());
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    const filtered = projects.filter(project =>
      project.name.toLowerCase().includes(debouncedQuery)
    );
    onSearchResults(filtered);
  }, [debouncedQuery, projects, onSearchResults]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search projects by name..."
        className={styles.searchInput}
      />
    </div>
  );
}
