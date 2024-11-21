'use client'

import type { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps, TabValue } from '@blank/types'
import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { createContext, useContext, useState } from 'react'

interface TabsContextType {
    activeValue: TabValue
    onClickTab: (value: TabValue) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

function Tabs({ children, defaultValue = 0, type = 'underline', className, fullWidth, onValueChange }: PropsWithChildren<TabsProps>) {
    const [activeValue, setActiveValue] = useState(defaultValue)

    const onClickTab = (value: TabValue) => {
        setActiveValue(value)
        onValueChange?.(value)
    }

    return (
        <TabsContext.Provider value={{ activeValue, onClickTab }}>
            <div
                className={clsx(
                    'blank__tabs',
                    `blank__tabs--${type}`,
                    fullWidth && 'blank__tabs--full',
                    className,
                )}
                role="tablist" // ARIA role for the tab list
            >
                {children}
            </div>
        </TabsContext.Provider>
    )
}

function TabsList({ children, className }: PropsWithChildren<TabsListProps>) {
    return <div className={clsx('blank__tabs-list', className)} role="tablist">{children}</div>
}

function TabsTrigger({ children, value, className }: PropsWithChildren<TabsTriggerProps>) {
    const context = useContext(TabsContext)
    if (!context) {
        throw new Error('TabsTrigger must be used within a Tabs provider')
    }
    const { activeValue, onClickTab } = context
    const isActive = value === activeValue

    return (
        <button
            className={clsx(
                'blank__tabs-trigger',
                isActive && 'blank__tabs-trigger--active',
                className,
            )}
            onClick={onClickTab.bind(undefined, value)}
            role="tab"
            aria-selected={isActive}
            id={`tab-${value}`}
        >
            {children}
        </button>
    )
}

function TabsContent({ children, value, className }: PropsWithChildren<TabsContentProps>) {
    const context = useContext(TabsContext)
    if (!context) {
        throw new Error('TabsContent must be used within a Tabs provider')
    }
    const { activeValue } = context

    return activeValue === value
        ? (
                <div
                    className={clsx('blank__tabs-content', className)}
                    role="tabpanel"
                    aria-labelledby={`tab-${value}`}
                >
                    {children}
                </div>
            )
        : null
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
