#!/usr/bin/env -S npx tsx
import { errorConsole } from '../helpers/console'

import __getAppEntry from './__getAppEntry'
import __loadSkyConfig, { __getAppConfig } from './__loadSkyConfig'
import __run from './__run'

export namespace node {
    dev()

    export async function dev(): Promise<void> {
        const name = process.argv[4]

        if (name == null || name === '') {
            errorConsole('missing app name')
            return
        }

        const skyConfig = await __loadSkyConfig()

        if (!skyConfig) {
            return
        }

        const skyAppConfig = __getAppConfig(name, skyConfig)

        if (!skyAppConfig) {
            return
        }

        const entry = __getAppEntry(name, skyAppConfig)

        const args = process.argv.slice(5)

        __run(
            `tsx --watch --expose-gc --no-warnings --tsconfig ${
                skyAppConfig.path
            }/tsconfig.json ${entry} ${args.join(' ')}`,
            {
                env: {
                    ...process.env,
                    NODE_ENV: 'development',
                },
            }
        )
    }
}
