export default function auth({to, next, store}) {
    // const loginQuery = { path: "/login", query: { redirect: to.fullPath } };
    const loginQuery = { path: "/login" };
    if (!store.loggedUser) {
        store.getAuthUser().then(() => {
            try {
                if (!store?.loggedUser?.id) next(loginQuery);
                else next();
            } catch (e) {
            }
        });
    } else {
        next();
    }
}
