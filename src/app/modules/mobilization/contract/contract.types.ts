export interface ContractResource {
  id: number;
  code: string;
  contractor: ContractorResource;
  vigence: VigenceResource;
  // todo: add others fields for contract resource
}

export interface ContractorResource {
  name: string;
}
export interface VigenceResource {
  startAt: Date;
  finishAt?: Date;
}
