import { NgModule } from '@angular/core';

// material component imports
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule]
})
export class CustomMaterialModule {}
