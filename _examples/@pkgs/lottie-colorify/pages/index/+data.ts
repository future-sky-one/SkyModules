import '#/imports'
import data from 'sky/@platform/web/data'

export default data(async pageContext => {
    await pageContext.init({
        ns: [],
    })

    return {
        title: 'Lottie Colorify Example',
        description: '',
    }
})