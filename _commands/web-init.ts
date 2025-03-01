#!/usr/bin/env -S npx tsx
import fs from 'fs'
import path from 'path'

import args from 'args'

import { errorConsole } from '../helpers/console'

import __loadSkyConfig, { __getAppConfig } from './__loadSkyConfig'
import __sdkPath from './__sdkPath'

args.parse(process.argv, {
    name: 'sky web init',
    mainColor: 'magenta',
    subColor: 'grey',
    mri: {},
})

export namespace web {
    init()

    export async function init(): Promise<void> {
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

        fs.cpSync(path.resolve(__sdkPath, '_commands/assets/web-initial'), skyAppConfig.path, {
            recursive: true,
        })
    }
}
