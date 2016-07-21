// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const ROUTES = {
  home: '/',
  users: '/users',
  constent: '/content',
  purchases: '/purchases'
};

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/users',
      name: 'user',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/User/reducer'),
          System.import('containers/User/sagas'),
          System.import('containers/User'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('user', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/purchases',
      name: 'purchases',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Purchases/reducer'),
          System.import('containers/Purchases/sagas'),
          System.import('containers/Purchases'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('purchases', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/content',
      name: 'content',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Content/reducer'),
          System.import('containers/Content/sagas'),
          System.import('containers/Content'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('content', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/leagues',
      name: 'leagues',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Leagues/reducer'),
          System.import('containers/Leagues/sagas'),
          System.import('containers/Leagues'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('leagues', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/brands',
      name: 'brands',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Brands/reducer'),
          System.import('containers/Brands/sagas'),
          System.import('containers/Brands'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('brands', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/events',
      name: 'events',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Events/reducer'),
          System.import('containers/Events/sagas'),
          System.import('containers/Events'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('events', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/handicappers',
      name: 'handicappers',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Handicappers/reducer'),
          System.import('containers/Handicappers/sagas'),
          System.import('containers/Handicappers'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('handicappers', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/members',
      name: 'members',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Members/reducer'),
          System.import('containers/Members/sagas'),
          System.import('containers/Members'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('members', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/operations',
      name: 'operations',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Operations/reducer'),
          System.import('containers/Operations/sagas'),
          System.import('containers/Operations'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('operations', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/periods',
      name: 'periods',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Periods/reducer'),
          System.import('containers/Periods/sagas'),
          System.import('containers/Periods'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('periods', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/picks',
      name: 'picks',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Picks/reducer'),
          System.import('containers/Picks/sagas'),
          System.import('containers/Picks'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('picks', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/products',
      name: 'products',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Products/reducer'),
          System.import('containers/Products/sagas'),
          System.import('containers/Products'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('products', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Login/reducer'),
          System.import('containers/Login/sagas'),
          System.import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/menu',
      getComponent(location, cb) {
        System.import('containers/MenuPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',











      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
