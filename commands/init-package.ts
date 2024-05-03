#!/usr/bin/env -S npx tsx
import fs from 'fs'

import { b, e, purple } from './__coloredConsole'
import __loadSkyConfig from './__loadSkyConfig'

export namespace init {
    const browserCommands = ['dev', 'build', 'start']
    const nodeCommands = ['dev', 'build', 'start']
    const tauriCommands = ['init', 'dev', 'build', 'start']

    package_()

    export function package_(): void {
        const skyConfig = __loadSkyConfig()

        const packageJson = fs.existsSync('package.json')
            ? JSON.parse(fs.readFileSync('package.json', 'utf-8'))
            : {}

        packageJson.scripts = { ...skyConfig.scripts }
        skyConfig.apps.forEach(app => {
            if (app.platforms.includes('native') || app.platforms.length > 1) {
                if (app.platforms.includes('native') || app.platforms.includes('browser')) {
                    browserCommands.forEach(
                        command =>
                            (packageJson.scripts[
                                `${app.name}:browser:${command}`
                            ] = `sky browser ${command} ${app.name}`)
                    )
                }
                if (app.platforms.includes('native')) {
                    tauriCommands.forEach(
                        command =>
                            (packageJson.scripts[
                                `${app.name}:tauri:${command}`
                            ] = `sky tauri ${command} ${app.name}`)
                    )
                }
                if (app.platforms.includes('node')) {
                    nodeCommands.forEach(
                        command =>
                            (packageJson.scripts[
                                `${app.name}:node:${command}`
                            ] = `sky node ${command} ${app.name}`)
                    )
                }
            } else {
                if (app.platforms.includes('native') || app.platforms.includes('browser')) {
                    browserCommands.forEach(
                        command =>
                            (packageJson.scripts[
                                `${app.name}:${command}`
                            ] = `sky browser ${command} ${app.name}`)
                    )
                }
                if (app.platforms.includes('node')) {
                    nodeCommands.forEach(
                        command =>
                            (packageJson.scripts[
                                `${app.name}:${command}`
                            ] = `sky node ${command} ${app.name}`)
                    )
                }
            }
        })
        packageJson.scripts['format'] = 'sky format'

        process.stdout.write(`${b}${purple}Rewrite package.json${e}`)
        fs.writeFileSync('package.json', JSON.stringify(packageJson, null, '    '), 'utf-8')
        process.stdout.write(` 👌\n`)
    }
}
