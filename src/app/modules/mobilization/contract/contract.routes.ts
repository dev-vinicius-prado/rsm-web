import { Routes } from "@angular/router";
import { ListComponent } from "app/modules/mobilization/contract/list/list-contract.component";
import { ContractComponent } from "./contract.component";

export default [
  {
    path: "",
    component: ListComponent,
    children: [
      {
        path: "incluir",
        component: ContractComponent,
      },
    ],
  },
] as Routes;
