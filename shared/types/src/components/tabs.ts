type TabValue = number | string

interface TabsProps {
    type?: 'underline' | 'segmented'
    fullWidth?: boolean
    onValueChange?: (value: TabValue) => void
    defaultValue: TabValue
    className?: string
}

interface TabsListProps {
    className?: string
}

interface TabsTriggerProps {
    value: TabValue
    className?: string
}

interface TabsContentProps {
    value: TabValue
    className?: string
}

export type { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps, TabValue }
