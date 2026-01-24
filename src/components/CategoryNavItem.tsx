import { navigate } from 'astro:transitions/client';
import { useState, useEffect, useRef, useMemo } from 'react';
import data from '../data/tools.json';
import './CategoryNavItem.css';
import type { Category } from '../types';

interface CategoryNavItemProps {
    title: string;
    category: string;
    filter: string;
}

export default function CategoryNavItem({
    title,
    category,
    filter,
}: CategoryNavItemProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isActive, setIsActive] = useState(false);

    const handleNavigation = (e: React.MouseEvent) => {
        e.preventDefault();
        const path = category === 'all' ? '/' : `/${category}`;
        navigate(path, {
            history: 'push',
            state: { category },
        });
    };

    const categoryCount = useMemo(() => {
        if (category === 'all') {
            return (data.tools as Category[]).reduce((acc, item) => acc + item.content.length, 0);
        }
        return (data.tools as Category[]).find((item) => item.category === category)?.content.length || 0;
    }, [category]);

    useEffect(() => {
        setIsActive(filter === category);
    }, [filter, category]);

    useEffect(() => {
        if (isActive && buttonRef.current) {
            buttonRef.current.scrollIntoView({
                behavior: 'instant',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [isActive]);

    return (
        <button
            ref={buttonRef}
            onClick={handleNavigation}
            className={`nav__item nu-u-text--secondary-alt nu-c-fs-small nav__item--filter ${isActive ? 'is-active' : ''}`}
            aria-label={`Navigate to ${title} category with ${categoryCount} items`}
        >
            {title} <span className="category-count">{categoryCount}</span>
        </button>
    );
}
