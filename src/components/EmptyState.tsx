import type { ReactNode } from 'react';
import './EmptyState.css';

interface EmptyStateProps {
    /** Icon to display (as ReactNode, typically an SVG) */
    icon?: ReactNode;
    /** Main message to display */
    message: string;
    /** Action button text */
    actionText?: string;
    /** Action button href */
    actionHref?: string;
    /** Optional onClick handler for the action button */
    onAction?: () => void;
}

/**
 * Empty state component for displaying when no content is available
 */
export default function EmptyState({
    icon,
    message,
    actionText,
    actionHref = '/',
    onAction,
}: EmptyStateProps) {
    const ActionElement = onAction ? 'button' : 'a';
    const actionProps = onAction
        ? { onClick: onAction, type: 'button' as const }
        : { href: actionHref };

    return (
        <div className="empty-state">
            {icon && <div className="empty-state-icon">{icon}</div>}
            <p className="nu-c-fs-small nu-u-text--secondary empty-state-message">
                {message}
            </p>
            {actionText && (
                <ActionElement className="submit-btn empty-state-action" {...actionProps}>
                    {actionText}
                </ActionElement>
            )}
        </div>
    );
}

// Pre-built icon components for common use cases
export function SearchIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="20" cy="20" r="14" />
            <path d="M30 30l12 12" />
        </svg>
    );
}

export function BookmarkIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m37 47-13.5-5L11 47V1h26v46z" clipRule="evenodd" />
        </svg>
    );
}
