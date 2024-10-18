import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ScreenshotComponent } from './screenshot/screenshot.component'

const routes: Routes = [
  { path: '', redirectTo: '/screenshot', pathMatch: 'full' },
  { path: 'screenshot', component: ScreenshotComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}