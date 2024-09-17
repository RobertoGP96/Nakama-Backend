interface PreSave {
  id: string;
  createat: string;
  updateat: string;

  pre_elements: string[];
  save_elements: number[];

  resource_id: number;
}

type editPreSave = Omit<PreSave, "id" | "createat" | "updateat">;
type createPreSave = Pick<PreSave, "pre_elements" | "save_elements" | "resource_id">;
