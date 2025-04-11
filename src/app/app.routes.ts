import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'basic-info-management',
                loadComponent: () =>
                    import('./pages/basic-info-management/basic-info-management.component').then(
                        (m) => m.BasicInfoManagementComponent
                    ),
                children: [
                    {
                        path: 'trader-overview',
                        loadComponent: () =>
                            import('./pages/basic-info-management/trader-overview/trader-overview.component').then(
                                (m) => m.TraderOverviewComponent
                            ),

                    }, {
                        path: 'trader-details',
                        loadComponent: () =>
                            import('./pages/basic-info-management/trader-details/trader-details.component').then(
                                (m) => m.TraderDetailsComponent
                            )
                    }, {
                        path: 'new-trader',
                        loadComponent: () =>
                            import('./pages/basic-info-management/new-trader/new-trader.component').then(
                                (m) => m.NewTraderComponent
                            )
                    },

                    {
                        path: 'products',
                        loadComponent: () =>
                            import('./pages/basic-info-management/products/products.component').then(
                                (m) => m.ProductsComponent
                            )
                    }, {
                        path: 'product-details',
                        loadComponent: () =>
                            import('./pages/basic-info-management/product-details/product-details.component').then(
                                (m) => m.ProductDetailsComponent

                            )
                    }, {
                        path: 'new-product',
                        loadComponent: () =>
                            import('./pages/basic-info-management/new-product/new-product.component').then(
                                (m) => m.NewProductComponent

                            )
                    },
                    {
                        path: 'customer-products',
                        loadComponent: () =>
                            import('./pages/basic-info-management/customer-products/customer-products.component').then(
                                (m) => m.CustomerProductsComponent
                            )
                    }
                ]
            },

            {
                path: 'inbound-management',
                loadComponent: () =>
                    import('./pages/inbound-management/inbound-management.component').then(
                        (m) => m.InboundManagementComponent
                    ),
                children: [
                    {
                        path: 'inbound-list',
                        loadComponent: () =>
                            import('./pages/inbound-management/inbound-list/inbound-list.component').then(
                                (m) => m.InboundListComponent
                            )
                    }, {
                        path: 'inbound-details',
                        loadComponent: () =>
                            import('./pages/inbound-management/inbound-details/inbound-details.component').then(
                                (m) => m.InboundDetailsComponent
                            )
                    },
                    {
                        path: 'new-inbound',
                        loadComponent: () =>
                            import('./pages/inbound-management/new-inbound/new-inbound.component').then(
                                (m) => m.NewInboundComponent
                            )
                    },
                    {
                        path: 'new-returned',
                        loadComponent: () =>
                            import('./pages/inbound-management/new-returned/new-returned.component').then(
                                (m) => m.NewReturnedComponent
                            )
                    }
                ]
            },

            {
                path: 'outbound-management',
                loadComponent: () =>
                    import('./pages/outbound-management/outbound-management.component').then(
                        (m) => m.OutboundManagementComponent
                    ),
                children: [
                    {
                        path: 'outbound-list',
                        loadComponent: () =>
                            import('./pages/outbound-management/outbound-list/outbound-list.component').then(
                                (m) => m.OutboundListComponent
                            )
                    },
                    {
                        path: 'new-outbound',
                        loadComponent: () =>
                            import('./pages/outbound-management/new-outbound/new-outbound.component').then(
                                (m) => m.NewOutboundComponent
                            )
                    }
                ]
            },

            {
                path: 'dispatch-management',
                loadComponent: () =>
                    import('./pages/dispatch-management/dispatch-management.component').then(
                        (m) => m.DispatchManagementComponent
                    ),
                children: [
                    {
                        path: 'dispatch-list',
                        loadComponent: () =>
                            import('./pages/dispatch-management/dispatch-list/dispatch-list.component').then(
                                (m) => m.DispatchListComponent
                            )
                    },
                    {
                        path: 'new-dispatch',
                        loadComponent: () =>
                            import('./pages/dispatch-management/new-dispatch/new-dispatch.component').then(
                                (m) => m.NewDispatchComponent
                            )
                    }
                ]
            },

            {
                path: 'inventory-management',
                loadComponent: () =>
                    import('./pages/inventory-management/inventory-management.component').then(
                        (m) => m.InventoryManagementComponent
                    ),
                children: [
                    {
                        path: 'inventory-list',
                        loadComponent: () =>
                            import('./pages/inventory-management/inventory-list/inventory-list.component').then(
                                (m) => m.InventoryListComponent
                            )
                    },
                    {
                        path: 'warehouses',
                        loadComponent: () =>
                            import('./pages/inventory-management/warehouses/warehouses.component').then(
                                (m) => m.WarehousesComponent
                            )
                    },
                ]
            },

            {
                path: 'others',
                loadComponent: () =>
                    import('./pages/others/others.component').then(
                        (m) => m.OthersComponent
                    ),
                children: [
                    {
                        path: 'auth-management',
                        loadComponent: () =>
                            import('./pages/others/auth-management/auth-management.component').then(
                                (m) => m.AuthManagementComponent
                            )
                    }
                ]
            }
        ]
    },
    // rediect
    {
        path: '**',
        redirectTo: 'login'
    }
];
