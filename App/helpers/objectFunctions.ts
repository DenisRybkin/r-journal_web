import * as jsonpatch from "fast-json-patch";

export const objectIsEquals = (obj1: Object, obj2: Object) =>
  jsonpatch._areEquals(obj1, obj2);
