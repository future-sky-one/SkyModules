import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, ReactNode, useEffect } from 'react'
import { logConsole } from 'sky/helpers/console'
import SearchParamsProvider from 'sky/providers/SearchParamsProvider'

import StoreContext from './StoreContext'
import TranslationsProvider from './TranslationsProvider'
import { PageContextProvider } from './usePageContext'

import type { PageContext } from 'vike/types'

import '#/styles/initial/index.scss'

export interface PageProvidersProps extends PropsWithChildren {
    pageContext: PageContext
    queryClient: QueryClient
}
export default function PageProviders(props: PageProvidersProps): ReactNode {
    const {
        pageContext,
        queryClient,
        pageContext: {
            lng,
            initial: { store, ns, resources, dehydratedState },
        },
        children,
    } = props

    logConsole('Page Render', pageContext.urlOriginal)

    useEffect(() => {
        setTimeout(() => {
            global.afterHydration = false
        }, 0)
    }, [])

    return (
        <PageContextProvider pageContext={pageContext}>
            <StoreContext.Provider value={store}>
                <TranslationsProvider lng={lng} ns={ns} resources={resources}>
                    <QueryClientProvider client={queryClient}>
                        <HydrationBoundary state={dehydratedState} queryClient={queryClient}>
                            <SearchParamsProvider>{children}</SearchParamsProvider>
                        </HydrationBoundary>
                    </QueryClientProvider>
                </TranslationsProvider>
            </StoreContext.Provider>
        </PageContextProvider>
    )
}
