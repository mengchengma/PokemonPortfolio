export type Asset =
  | { type: "image"; src: string }
  | { type: "emoji"; value: string };

export function getAsset(path: string | null, fallback: string): Asset {
  if (path) return { type: "image", src: path };
  return { type: "emoji", value: fallback };
}
