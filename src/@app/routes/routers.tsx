import _ from "lodash";

// interface 
interface RouteProps {
  [index: string]: RoutePropsItems
}
interface RoutePropsItems {
  route: string;
  fallback?: string;
  title?: string;
}
// - HELPER
const getRoutes = (n: any) =>
  Object.keys(n).reduce((p: any, route) => [...p, n[route]], []);

const AdminRoutes: RouteProps = {
  Home: {
    route: "/admin",
    fallback: "/",
    title: "About",
  },
  Authorlist: {
    route: "/admin/authorlist",
    fallback: "/admin",
    title: "Author list",
  },
  Pendinglist: {
    route: "/admin/pendingpost",
    fallback: "/admin",
    title: "Pending list",
  },
}

const UserRoutes: RouteProps = {
  Addpost: { route: "/addpost", fallback: "/", title: "Add Post" },
}

const MainRoutes: RouteProps = {
  Home: { route: "/", fallback: "/", title: "Home" },
  PostDetail: { route: "/post/[id]", fallback: "/", title: "Post Detail" },
};

const allRoutes = [AdminRoutes, MainRoutes, UserRoutes].reduce(
  (p: any, n: any) => [...p, ...getRoutes(n)],
  []
);

const Routes = {
  Main: MainRoutes,
  Admin: AdminRoutes,
  User: UserRoutes,
  
  get: (route: string, params: any) => {
    let _route = route;
    if (params) {
      Object.keys(params).forEach((paramKey) => {
        _route = _route.replace(`[${paramKey}]`, params[paramKey]);
      });
    }
    return _route;
  },
  getRoute: (route: string) => {
    const AdminPages = getRoutes(MainRoutes);
    const _route = AdminPages.find((r: any) => r.route === route);
    return _route;
  },
  getTitle: (route: string) => {
    const _route = allRoutes.find((r) => r.route === route);
    if (_route) return _route.title;
    return "Stack overflow";
  },
  isMain: (route: string) => {
    const landingPages = getRoutes(MainRoutes);
    const _route = landingPages.find((r: any) => r.route === route);
    return _route;
  },
  isAdmin: (route: string) => {
    const adminPages = getRoutes(AdminRoutes);
    const _route = adminPages.find((r: any) => r.route === route);
    return _route;
  },
};

export default Routes;
