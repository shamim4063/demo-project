import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloaderService } from './app-services/pre-loader.service';

const routes: Routes = [
    { path: '', redirectTo: 'accounts', pathMatch: 'full' },
    {
        path: 'pages',
        loadChildren: () =>
            import('./pages/pages.module').then((m) => m.PagesModule),
        data: { preload: true, delay: 500 },
    },
    {
        path: 'accounts',
        loadChildren: () =>
            import('./accounts/accounts.module').then((m) => m.AccountsModule),
        data: { preload: true, delay: 5000 },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloaderService,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
