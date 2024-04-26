import __import from './__import'

const command = process.argv[3]
if (!command) {
    // eslint-disable-next-line no-console
    console.error(`browser: missing command`)
}
else if (!__import(`./browser-${command}.ts`)) {
    // eslint-disable-next-line no-console
    console.error(`browser: command "${command}" not found`)
}
