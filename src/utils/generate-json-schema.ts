import * as fs from "fs";
import * as path from "path";
import type { ZodSchema } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export default function generateJsonSchema(obj: Record<string, ZodSchema>) {
  const outDir = path.resolve(process.cwd(), "public");
  Object.entries(obj).forEach(([name, schema]) => {
    fs.writeFileSync(
      path.resolve(outDir, `${name}.schema.json`),
      JSON.stringify(zodToJsonSchema(schema, name), null, 2),
    );
  });
}
