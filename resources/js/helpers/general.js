export function initialize(router) {
    router.afterEach((to, from) => {
        Vue.nextTick( () => {
            document.title = to.meta.title ? to.meta.title : 'default title';
        });
    });
}
