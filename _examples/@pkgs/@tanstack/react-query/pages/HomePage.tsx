import '#/imports'

import { useMutation, useQuery, useQueryClient } from '@pkgs/@tanstack/react-query'
import { Fragment } from 'react/jsx-runtime'

import PageLayout from '#/layouts/PageLayout'
import useData from '#/renderer/useData'

import HomePageData from './+data'
import { onCreateTodo, onGetTodos } from './Page.telefunc'

export function HomePage(): ReactNode {
    useData(HomePageData)

    const queryClient = useQueryClient()

    const { isLoading: isLoadingTodos, data: todos } = useQuery({
        queryKey: ['todos'],
        queryFn: onGetTodos,
    })

    const createTodo = useMutation({
        mutationFn: onCreateTodo,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })

    return (
        <PageLayout>
            {isLoadingTodos ? (
                <>
                    Loading...
                    <br />
                </>
            ) : (
                todos?.map((todo, i) => (
                    <Fragment key={i}>
                        {todo.name}
                        <br />
                        {todo.description}
                        <br />
                        <br />
                    </Fragment>
                ))
            )}
            <button
                onClick={(): void =>
                    createTodo.mutate({
                        name: 'New Todo',
                        description: `New Todo \n${new Date().toLocaleDateString()}`,
                    })
                }
            >
                Add Todo
            </button>
        </PageLayout>
    )
}
