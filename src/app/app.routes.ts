import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full',
  },
  {
    path: 'folder/:folder',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./catalogo/catalogo.page').then( m => m.CatalogoPage)
  },
  {
    path: 'catalogo-detalle/:id',
    loadComponent: () => import('./catalogo-detalle/catalogo-detalle.page').then( m => m.CatalogoDetallePage)
  },

];
