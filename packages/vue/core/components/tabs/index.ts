import type { TabValue } from '@blank/types'
import type { InjectionKey, Ref } from 'vue'

interface TabsContextType { activeValue: Ref<TabValue>, onClickTab: (value: TabValue) => void }

export const TABS_CONTEXT_KEY: InjectionKey<TabsContextType> = Symbol('tabsContext')

export { default as Tabs } from './tabs.vue'
export { default as TabsContent } from './tabsContent.vue'
export { default as TabsList } from './tabsList.vue'
export { default as TabsTrigger } from './tabsTrigger.vue'
