import { Sql } from '@pkgs/postgres'

declare global {
    namespace Postgres {
        const createTable: (
            sql: Sql,
            database: string,
            name: string,
            columns: Postgres.Column[],
            indexes?: Postgres.Index[]
        ) => Promise<void>
    }
}

async function __createTable(sql: Sql, name: string, columns: Postgres.Column[]): Promise<void> {
    const argsQuery = `
        (
            ${columns
                .map(
                    column => `
                        ${column.name.toLowerCase()}
                        ${column.autoIncrement ? `BIGSERIAL` : column.type}
                        ${column.primary ? `PRIMARY KEY` : ''}
                        ${column.unique ? `UNIQUE` : ''}
                        ${column.default != null ? `DEFAULT(${column.default})` : ''}
                        ${column.notNull ? `NOT NULL` : ''}
                        ${column.codepage ? `${column.codepage}` : ''}
                    `
                )
                .join(',')}
        )
    `

    await sql`CREATE TABLE ${sql(name)} ${sql.unsafe(argsQuery)}`
}

Object.assign(Postgres, {
    async createTable(
        sql: Sql,
        database: string,
        name: string,
        columns: Postgres.Column[],
        indexes?: Postgres.Index[]
    ): Promise<void> {
        if (await Postgres.isTableExists(sql, database, name)) {
            throw new Error(`Postgres: table ${database} ${name} is exists`)
        } else {
            await __createTable(sql, name, columns)
            await Postgres.createIndexes(sql, name, indexes)
        }
    },
})
