import { useEffect, useState } from 'react';
import CategoryNav from './CategoryNav';
import CardsContainer from './CardsContainer';

interface DashboardProps {
    category: string;
}

interface SearchEventDetail {
    query?: string;
}

interface FilterNewEventDetail {
    filterNew?: boolean;
}

export default function Dashboard({ category }: DashboardProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterNew, setFilterNew] = useState(false);

    useEffect(() => {
        const handleSearch = (e: Event) => {
            const detail = (e as CustomEvent<SearchEventDetail>)?.detail || {};
            if (typeof detail.query !== 'undefined') {
                setSearchQuery(detail.query);
            }
        };

        const handleFilterNew = (e: Event) => {
            const detail = (e as CustomEvent<FilterNewEventDetail>)?.detail || {};
            if (typeof detail.filterNew !== 'undefined') {
                setFilterNew(detail.filterNew);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('tools:search', handleSearch);
            window.addEventListener('tools:filter-new', handleFilterNew);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('tools:search', handleSearch);
                window.removeEventListener('tools:filter-new', handleFilterNew);
            }
        };
    }, []);

    return (
        <>
            <CategoryNav filter={category} />
            <CardsContainer
                filter={category}
                searchQuery={searchQuery}
                filterNew={filterNew}
            />
        </>
    );
}
