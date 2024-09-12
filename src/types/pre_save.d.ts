interface PreSave {
  id: string;
  createat: string;
  updateat: string;

  pre_elements: number[];

  resource_id: number;
}

type editPreSave = Omit<PreSave, "id" | "createat" | "updateat">;
type createPreSave = Pick<PreSave, "pre_elements" | "resource_id">;
