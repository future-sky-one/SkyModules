// https://vike.dev/onRenderClient
export { onRenderClient }

import { hydrate, QueryClient } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { logConsole } from 'sky/helpers/console'

import PageProviders from './PageProviders'
import routeData from './routeData'
import { PageContextProvider } from './usePageContext'

import type { OnRenderClientAsync, PageContext } from 'vike/types'

window.global = window

let root: ReactDOM.Root
let initial: PageContext['initial']
const client = new QueryClient()

const onRenderClient: OnRenderClientAsync = async (
    pageContext
): ReturnType<OnRenderClientAsync> => {
    if (!root) {
        Object.assign(routeData, {
            domain: pageContext.domain,
            lng: pageContext.lng,
            lngPrefix: pageContext.lngPrefix,
        })

        initial = pageContext.initial
        hydrate(client, initial.dehydratedState)

        global.afterHydration = true
        global.ip = pageContext.initial.ip

        setTimeout(() => {
            global.afterHydration = false
        }, 0)
    } else {
        pageContext.initial = initial
    }

    const { Page } = pageContext

    // This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
    // to support SPA
    if (!Page) {
        throw new Error('My onRenderClient() hook expects pageContext.Page to be defined')
    }

    const container = document.getElementById('react-root')

    if (!container) {
        throw new Error('DOM element #react-root not found')
    }

    let page: JSX.Element
    if (pageContext.errorWhileRendering) {
        page = (
            <PageContextProvider pageContext={pageContext}>
                <Page />
            </PageContextProvider>
        )
    } else {
        page = (
            <PageProviders pageContext={pageContext} client={client}>
                <Page />
            </PageProviders>
        )
    }

    if (!root) {
        logConsole('Hydrate')
        root = ReactDOM.hydrateRoot(container, page)
    } else {
        logConsole('Render')

        if (!root) {
            root = ReactDOM.createRoot(container)
        }

        root.render(page)
    }
}
